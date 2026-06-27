export default function FileUpload({ setResumeFile }) {
  return (
    <div id="fileUploadRoot">
      <div className="stepHeaders">
        <div>
          <b>2</b>
        </div>
        <h3>Upload your resume</h3>
      </div>
      <form method="POST">
        <div id="fileUploadArea">
          <input
            type="file"
            id="myFile"
            name="filename"
            onChange={(event) => setResumeFile(event.target.files[0])}
          ></input>
          <p>Drop PDF or Word Doc here or click to upload</p>
        </div>
      </form>
    </div>
  );
}
