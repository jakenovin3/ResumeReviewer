import React, { useState } from "react";
//import uploadIcon from 'assets/upload.svg'

function PageHeader() {
  return (
    <div id="pageHeaderRoot">
      <div id="pageHeaderMain">
        <div id="titleDesc">
          <h1>Resume Rx</h1>
          <p>Advanced feedback in seconds</p>
        </div>
        <span>Powered by AI</span>
      </div>
    </div>
  );
}

function JobSearch({ setJob }) {
  const [input, setInput] = useState("");

  return (
    <div id="jobSearchRoot">
      <div className="stepHeaders">
        <div>
          <b>1</b>
        </div>
        <h3>Job search</h3>
      </div>
      <div id="jobSearchSection">
        <form id="jobSearchForm">
          <input
            id="jobSearchInput"
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Frontend Developer, Phoenix AZ"
          ></input>
        </form>
        <button id="jobSearchSubmit" onClick={() => setJob(input)}>
          &gt;
        </button>
      </div>
    </div>
  );
}

function FileUpload() {
  return (
    <div id="fileUploadRoot">
      <div className="stepHeaders">
        <div>
          <b>2</b>
        </div>
        <h3>Upload your resume</h3>
      </div>
      <div id="fileUploadArea">
        <p>Drop PDF or Word Doc here or click to upload</p>
      </div>
    </div>
  );
}

export default function App() {
  const [job, setJob] = useState("");
  const [resume, setResume] = useState(null);

  return (
    <>
      <div id="headerMain">
        <PageHeader />
      </div>
      <div id="bodyMain">
        <JobSearch setJob={setJob} />
        <FileUpload />
        <button id="submitResumeBtn">Start reviewing!</button>
      </div>
    </>
  );
}
