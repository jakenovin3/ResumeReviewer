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
          <div id="scores">
            <h1>Score: 4.2/5 stars</h1>
            <div id="atsScoreDiv">
              <p>ATS Score: </p>
              <p id="atsScoreValue">
                <b>86</b>
              </p>
            </div>
          </div>
          <hr />
          <div id="ratingAreas">
            <div className="rating tooltip">
              <h3>Experience</h3>
              <h2>3.9 stars</h2>
              <span className="tooltiptext">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since 1966
              </span>
            </div>
            <div className="vl"></div>
            <div className="rating tooltip">
              <h3>Skills Match</h3>
              <h2>4.5 stars</h2>
              <span className="tooltiptext">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since 1966
              </span>
            </div>
            <div className="vl"></div>
            <div className="rating tooltip">
              <h3>Clarity</h3>
              <h2>4.1 stars</h2>
              <span className="tooltiptext">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since 1966
              </span>
            </div>
          </div>
        </div>
        <div className="reviewSummarySection reviewSection">
          <h3>Review Summary</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since 1966, when designers at Letraset
            and James Mosley, the librarian at St Bride Printing Library in London, took a 1914
            Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.
          </p>
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
