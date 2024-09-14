import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import JoditEditor from "jodit-react";

const AdminHomeEdit = React.memo(() => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const editor = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setError(""); // Clear error if user uploads an image
    }
  };

  const handleSave = () => {
    if (!image || !content) {
      setError("Please upload an image and enter some text.");
    } else {
      setError(""); // Clear any existing errors
      alert("Saved!");
      // Add your save logic here
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      {/* Upload Image Button */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="upload-button"
      />
      <label htmlFor="upload-button" style={{ cursor: "pointer" }}>
        <div
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon icon={faUpload} style={{ marginRight: "10px" }} />
          Upload Image
        </div>
      </label>

      {/* Display Uploaded Image */}
      {image && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={image}
            alt="Uploaded"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />
        </div>
      )}

      {/* Jodit Editor */}
      <div style={{ width: "80%" }}>
        <JoditEditor
          ref={editor}
          value={content}
          onBlur={(newContent) => setContent(newContent)} // Update state onBlur instead of onChange
          config={{
            readonly: false,
            height: 500,
            toolbarAdaptive: false,
          }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>
      )}

      {/* Save and Delete Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginRight: "10px",
            marginBottom: "50px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleSave}
        >
          <FontAwesomeIcon icon={faSave} style={{ marginRight: "10px" }} />
          Save
        </button>
        <button
          style={{
            backgroundColor: "#dc3545",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            marginBottom: "50px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setContent("");
            setImage(null);
            setError(""); // Clear any existing errors
          }}
        >
          <FontAwesomeIcon icon={faTrash} style={{ marginRight: "10px" }} />
          Delete
        </button>
      </div>
    </div>
  );
});

export default AdminHomeEdit;
