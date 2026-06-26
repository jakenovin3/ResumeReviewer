import PageHeader from "../components/PageHeader.jsx";
import JobSearch from "../components/JobSearch.jsx";
import FileUpload from "../components/FileUpload.jsx";

export default function Review() {
  return (
    <>
      <div id="headerMain">
        <PageHeader />
      </div>
      <div id="bodyMain">
        <div className="reviewRatingSection">
          <div>
            <h1>Overall: 4.2/5 stars</h1>
            <div>
              <p>ATS Pass Likelihood: </p>
              <span id="atsPassFail">Likely to pass</span>
            </div>
          </div>
          <div id="ratingAreas">
            <div className="rating">
              <h3>Relevant Experience</h3>
              <h2>3.9 stars</h2>
            </div>
            <div className="rating">
              <h3>Skills Match</h3>
              <h2>4.5 stars</h2>
            </div>
            <div className="rating">
              <h3>Formatting/Clarity</h3>
              <h2>4.1 stars</h2>
            </div>
          </div>
        </div>
        <div className="reviewSummarySection reviewSection">
          <h3>Summary</h3>
          <p></p>
        </div>
        <div className="reviewNotesSection reviewSection">
          <div>
            <h3>Suggested Edits</h3>
            <ol></ol>
          </div>
        </div>
      </div>
    </>
  );
}
