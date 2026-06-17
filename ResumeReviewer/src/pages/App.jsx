import React, { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import JobSearch from "../components/JobSearch.jsx";
import FileUpload from "../components/FileUpload.jsx";
//import uploadIcon from 'assets/upload.svg'

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
