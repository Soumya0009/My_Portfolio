import { privateAxios } from "./helper";

const PdfService = {
  // Upload PDF file
  uploadPdf: (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return privateAxios
      .post("/pdf/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(
          "Error uploading PDF:",
          error.response?.data || error.message
        );
        throw error;
      });
  },

  // Get PDF metadata
  getPdfMetadata: (id) => {
    const validId = id || 0 || 1; // Use default ID if `id` is falsy
    return privateAxios
      .get(`/pdf/${validId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(
          "Error fetching PDF metadata:",
          error.response?.data || error.message
        );
        throw error;
      });
  },

  // Fetch a single PDF file
  fetchPdf: (id) => {
    const validId = id || 0 || 1; // Use default ID if `id` is falsy
    return privateAxios
      .get(`/pdf/${validId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(
          "Error fetching PDF:",
          error.response?.data || error.message
        );
        throw error;
      });
  },

  // Get PDF URL
  getPdfUrl: (uniqueFileName) => {
    return `${privateAxios.defaults.baseURL}/pdf/download/${uniqueFileName}`;
  },

  // Download PDF
  downloadPdf: (uniqueFileName) => {
    return privateAxios
      .get(`/pdf/download/${uniqueFileName}`, {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", uniqueFileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        return response.data;
      })
      .catch((error) => {
        console.error(
          "Error downloading PDF:",
          error.response?.data || error.message
        );
        throw error;
      });
  },

  // View PDF
  viewPdf: (uniqueFileName) => {
    const pdfUrl = `${privateAxios.defaults.baseURL}/pdf/view/${uniqueFileName}`;
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
  },

  // Delete PDF
  deletePdf: (id) => {
    if (!id) {
      return Promise.reject(new Error("Invalid ID: PDF ID is required."));
    }
    return privateAxios
      .delete(`/pdf/delete/${id}`)
      .then((response) => {
        console.log(`Successfully deleted PDF with ID: ${id}`);
        return response.data;
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "Failed to delete the PDF.";
        console.error(`Error deleting PDF with ID ${id}:`, errorMessage);
        throw new Error(errorMessage);
      });
  },
};

export default PdfService;
