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
          <h1>4.2/5 stars</h1>
        </div>
        <div className="reviewSummarySection reviewSection">
          <h3>Summary</h3>
          <p></p>
        </div>
        <div className="reviewNotesSection reviewSection">
          <div>
            <h3>The Good</h3>
            <p></p>
          </div>
          <div>
            <h3>The Bad</h3>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
