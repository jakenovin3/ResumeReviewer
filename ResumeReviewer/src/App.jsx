import React from "react";
import "./App.css";

function PageHeader() {
  return (
    <div id="pageHeaderRoot">
      <div id="pageHeaderMain">
        <h1>Resume Rx</h1>
      </div>
    </div>
  );
}

function JobSearch() {
  return (
    <div id="jobSearchRoot">
      <h3>Step 1 — Job search</h3>
      <form id="jobSearchForm">
        <input id="jobSearchInput"></input>
      </form>
    </div>
  );
}

function FileUpload() {
  return (
    <div id="fileUploadRoot">
      <h3>Step 2 — Upload your resume</h3>
      <div id="fileUploadArea">
        <p>Drop PDF or Word Doc here or click to upload</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <div id="headerMain">
        <PageHeader />
      </div>
      <div id="bodyMain">
        <JobSearch />
        <FileUpload />
        <button id="submitResumeBtn">Rate</button>
      </div>
    </>
  );
}
