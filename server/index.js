import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/analyze', async (req, res) => {
  const { resume, jobDescription } = req.body;

  const prompt =
    `You are a resume reviewer. Compare the following resume against the job description.
    Respond ONLY with a JSON object, no markdown formatting, no backticks, no extra text.
    The JSON object must have these keys:
    - "score": a number from 0-100
    - "strengths": an array of strings
    - "gaps": an array of strings
    - "suggestions": an array of strings

    Resume:
    """
    resume
    """

    Job Description:
    """
    jobdescription
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
            {text: prompt}
          ]}
        ]
      })
    });
  } catch(err) {
    console.error('FETCH FAILED:', err);
    return res.status(500).json({ error: err.message });
  }
  

  const data = await response.json();

  console.log(data);

  // parse the response
  // send it back with res.json(...)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

