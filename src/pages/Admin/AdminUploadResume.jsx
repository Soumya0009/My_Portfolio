import React, { useState } from "react";
import { Button, Box, Typography, Container, TextField } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import pdfService from "../../Services/PdfService ";

const PdfUploadPage = () => {
  const [file, setFile] = useState(null); // Local file state
  const [uploading, setUploading] = useState(false); // Uploading state
  const [deleteId, setDeleteId] = useState(""); // State for delete ID

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid PDF file.");
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    setUploading(true);
    try {
      const response = await pdfService.uploadPdf(file);
      toast.success("Resume uploaded successfully!");
      setFile(null); // Reset file after successful upload
      console.log("Upload response:", response);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to upload resume.");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  // Handle file deletion
  const handleDelete = async () => {
    if (!deleteId) {
      toast.error("Please provide an ID to delete the PDF.");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the PDF with ID: ${deleteId}?`
    );
    if (confirmDelete) {
      try {
        await pdfService.deletePdf(deleteId); // Call delete service with the ID
        toast.success(`PDF with ID ${deleteId} deleted successfully!`);
        setDeleteId(""); // Reset the delete ID field
      } catch (error) {
        toast.error(
          error.response?.data?.message || "Failed to delete the PDF."
        );
        console.error("Delete error:", error);
      }
    }
  };

  // Render PDF preview
  const renderPdfPreview = () => {
    if (!file) return null;
    const fileUrl = URL.createObjectURL(file);
    return (
      <Box mt={3} mb={10}>
        <Typography variant="h6">PDF Preview:</Typography>
        <embed src={fileUrl} width="100%" height="500px" />
      </Box>
    );
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Resume
      </Typography>

      <Box mt={2}>
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="pdf-upload-input"
        />
        <label htmlFor="pdf-upload-input">
          <Button
            variant="contained"
            component="span"
            color="primary"
            size="large"
            disabled={uploading}
          >
            Choose Resume PDF
            <AttachFileOutlinedIcon style={{ marginLeft: "10px" }} />
          </Button>
        </label>
      </Box>

      {file && (
        <Typography variant="body1" mt={2}>
          Selected File: {file.name}
        </Typography>
      )}

      <Box mt={3}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          {uploading ? "Uploading..." : "Upload Resume"}
          <UploadFileIcon style={{ marginLeft: "10px" }} />
        </Button>
      </Box>

      {renderPdfPreview()}

      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Delete Uploaded Resume
        </Typography>
        <TextField
          label="Enter PDF ID"
          variant="outlined"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          Delete PDF
        </Button>
      </Box>
    </Container>
  );
};

export default PdfUploadPage;
