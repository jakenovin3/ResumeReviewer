import React, { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader.jsx";
import JobSearch from "../components/JobSearch.jsx";
import FileUpload from "../components/FileUpload.jsx";
//import uploadIcon from 'assets/upload.svg'

export default function App() {
  const [job, setJob] = useState("");
  const [resume, setResume] = useState(null);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3001/");
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

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
