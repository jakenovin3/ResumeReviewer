import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import multer from 'multer'
import mammoth from 'mammoth'
const upload = multer({ storage: multer.memoryStorage() })
const app = express();
const port = 3001;
const corsOptions = {
  origin: "http://localhost:5173",
}
app.use(cors(corsOptions));
app.use(express.json());
dotenv.config();

app.get('/', (req, res) => {
  // res.send("hello world");
});

app.post('/api/analyze', upload.single('resume_file'), async (req, res) => {
  const resume = req.file;
  const { jobDescription } = req.body;
  
  let resumeContent;

  // If PDF submitted, adding attaching PDF to Gemini's file upload (inlineData)
  if(resume.mimetype === 'application/pdf') {
    resumeContent = {
      inlineData: {
        mimetype: resume.mimetype,
        data: resume.buffer.toString('base64')
      }
    }
    // If Word Doc, saving raw text
  } else if(resume.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')  {
    const rawResumeText = await mammoth.extractRawText({ buffer: resume.buffer });
    resumeContent = {
      text: rawResumeText
    }
  } else {
    return res.status(400).json({ error: 'Unsupported file type '});
  }

  const prompt =
    `You are a resume reviewer. Compare the following resume against the job description.
    Respond ONLY with a JSON object, no markdown formatting, no backticks, no extra text.
    The JSON object must have these keys:
    - "score": a number from 0-100
    - "strengths": an array of strings
    - "gaps": an array of strings
    - "suggestions": an array of strings

    Job Description:
    """
    ${jobDescription}
    """`
  ;

  const geminiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + process.env.GEMINI_API_KEY;
  try {
    const response = await fetch(geminiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {parts: [
            {text: prompt},
            {
              "inlineData": {
                "mimetype": "application/pdf",
                "data": resumeContent,
              }
            }
          ]}
        ]
      })
    });

    console.log(response);
  } catch(err) {
    console.error('FETCH FAILED:', err);
    return res.status(500).json({ error: err.message });
  }
  

  // const data = await response.json();

  // console.log(data);

  // parse the response
  // send it back with res.json(...)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

