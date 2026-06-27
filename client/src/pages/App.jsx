import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader.jsx";
import JobSearch from "../components/JobSearch.jsx";
import FileUpload from "../components/FileUpload.jsx";
//import uploadIcon from 'assets/upload.svg'

export default function App() {
  const [job, setJob] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3001/");
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const onFileChange = (event) => {
    setResumeFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("resume_file", resumeFile);
    console.log(resumeFile);
    axios.post("http://localhost:3001/api/analyze", formData);
  };

  return (
    <>
      <div id="headerMain">
        <PageHeader />
      </div>
      <div id="bodyMain">
        <JobSearch setJob={setJob} />
        <FileUpload setResumeFile={setResumeFile} />
        <button id="submitResumeBtn" onClick={onFileUpload}>
          Start reviewing!
        </button>
      </div>
    </>
  );
}
