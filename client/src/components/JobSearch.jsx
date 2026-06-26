import React, { useState } from "react";

export default function JobSearch({ setJob }) {
  const [input, setInput] = useState("");

  return (
    <div id="jobSearchRoot">
      <div className="stepHeaders">
        <div>
          <b>1</b>
        </div>
        <h3>Provide job post link</h3>
      </div>
      <div id="jobSearchSection">
        <form id="jobSearchForm">
          <input
            id="jobSearchInput"
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. www.linkedin/jobs/search-results..."
          ></input>
        </form>
        <button id="jobSearchSubmit" onClick={() => setJob(input)}>
          &gt;
        </button>
      </div>
    </div>
  );
}
