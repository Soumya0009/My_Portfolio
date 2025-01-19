import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import PdfService from "../Services/PdfService ";
import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
import { privateAxios } from "../Services/helper";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Import Skeleton styles

const ResumePage = () => {
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
  const [uniqueFileName, setUniqueFileName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPdfMetadata = async () => {
      try {
        setLoading(true);
        // Fetch metadata (replace '1' with actual ID if needed)
        const metadata = await PdfService.getPdfMetadata(1);
        setUniqueFileName(metadata.uniqueFileName);

        // Create preview URL
        const previewResponse = await privateAxios.get(
          `/pdf/download/${metadata.uniqueFileName}`,
          {
            responseType: "blob",
          }
        );
        const previewUrl = URL.createObjectURL(previewResponse.data);
        setPdfPreviewUrl(previewUrl);
      } catch (error) {
        console.error("Error fetching the PDF metadata:", error);
        setError("Failed to load PDF preview");
      } finally {
        setLoading(false);
      }
    };

    fetchPdfMetadata();

    // Cleanup function
    return () => {
      if (pdfPreviewUrl) {
        URL.revokeObjectURL(pdfPreviewUrl);
      }
    };
  }, []);

  const handleDownloadPdf = async () => {
    try {
      const response = await privateAxios.get(
        `/pdf/download/${uniqueFileName}`,
        {
          responseType: "blob",
        }
      );

      // Create a blob URL for downloading
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = uniqueFileName; // Set the download filename

      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error("Error downloading PDF:", error);
      setError("Failed to download PDF");
    }
  };

  // Render the PDF preview if available
  const renderPdfPreview = () => {
    if (loading) {
      return (
        <Box mt={3} mb={10}>
          <Typography variant="h6">PDF Preview:</Typography>
          <Skeleton height={500} width="100%" />
        </Box>
      );
    }

    if (error) {
      return (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      );
    }

    if (!pdfPreviewUrl) {
      return (
        <Typography variant="body1" color="textSecondary">
          PDF preview not available
        </Typography>
      );
    }

    return (
      <Box mt={3} mb={10}>
        <Typography variant="h6">PDF Preview:</Typography>
        <object
          data={pdfPreviewUrl}
          type="application/pdf"
          width="100%"
          height="500px"
          style={{ borderRadius: "5px" }}
        >
          <Typography>
            Unable to display PDF. Please download to view.
          </Typography>
        </object>
      </Box>
    );
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#FFCC00" }}>SOUMYA RANJAN MOHANTY</h1>
        <h2 style={{ color: "#666" }}>Software Engineer</h2>
      </header>

      <main style={{ textAlign: "center" }}>
        {renderPdfPreview()}
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownloadPdf}
            disabled={loading || !uniqueFileName}
          >
            Download Resume
            <FileDownloadTwoToneIcon style={{ marginLeft: "10px" }} />
          </Button>
        </Box>
      </main>
    </div>
  );
};

export default ResumePage;

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import PdfService from "../Services/PdfService ";
// import FileDownloadTwoToneIcon from "@mui/icons-material/FileDownloadTwoTone";
// import { privateAxios } from "../Services/helper";
// import { toast } from "react-toastify";

// const ResumePage = () => {
//   const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);
//   const [uniqueFileName, setUniqueFileName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch only the PDF metadata and create a preview URL
//   useEffect(() => {
//     const fetchPdfMetadata = async () => {
//       try {
//         setLoading(true);
//         // Fetch metadata (replace '1' with actual ID if needed)
//         const metadata = await PdfService.getPdfMetadata(1);
//         setUniqueFileName(metadata.uniqueFileName);

//         // Create preview URL
//         const previewResponse = await privateAxios.get(
//           `/pdf/download/${metadata.uniqueFileName}`,
//           {
//             responseType: "blob",
//           }
//         );
//         const previewUrl = URL.createObjectURL(previewResponse.data);
//         setPdfPreviewUrl(previewUrl);
//       } catch (error) {
//         console.error("Error fetching the PDF metadata:", error);
//         setError("Failed to load PDF preview");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPdfMetadata();

//     // Cleanup function
//     return () => {
//       if (pdfPreviewUrl) {
//         URL.revokeObjectURL(pdfPreviewUrl);
//       }
//     };
//   }, []);

//   // Handle PDF download only when button is clicked
//   const handleDownloadPdf = async () => {
//     try {
//       const response = await privateAxios.get(
//         `/pdf/download/${uniqueFileName}`,
//         {
//           responseType: "blob",
//         }

//       );

//       // Create a blob URL for downloading
//       const blob = new Blob([response.data], { type: "application/pdf" });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = uniqueFileName; // Set the download filename

//       // Append to document, click, and cleanup
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//       toast.success("Resume downloaded successfully!");
//     } catch (error) {
//       console.error("Error downloading PDF:", error);
//       setError("Failed to download PDF");
//     }
//   };

//   // Render the PDF preview if available
//   const renderPdfPreview = () => {
//     if (loading) {
//       return (
//         <Typography variant="body1" color="textSecondary">
//           Loading PDF preview...
//         </Typography>
//       );
//     }

//     if (error) {
//       return (
//         <Typography variant="body1" color="error">
//           {error}
//         </Typography>
//       );
//     }

//     if (!pdfPreviewUrl) {
//       return (
//         <Typography variant="body1" color="textSecondary">
//           PDF preview not available
//         </Typography>
//       );
//     }

//     return (
//       <Box mt={3} mb={10}>
//         <Typography variant="h6">PDF Preview:</Typography>
//         <object
//           data={pdfPreviewUrl}
//           type="application/pdf"
//           width="100%"
//           height="500px"
//           style={{ borderRadius: "5px" }}
//         >
//           <Typography>
//             Unable to display PDF. Please download to view.
//           </Typography>
//         </object>
//       </Box>
//     );
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         maxWidth: "800px",
//         margin: "0 auto",
//         padding: "20px",
//       }}
//     >
//       <header style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1 style={{ color: "#FFCC00" }}>SOUMYA RANJAN MOHANTY</h1>
//         <h2 style={{ color: "#666" }}>Software Engineer</h2>
//       </header>

//       <main style={{ textAlign: "center" }}>
//         {renderPdfPreview()}
//         <Box mt={3}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleDownloadPdf}
//             disabled={loading || !uniqueFileName}
//           >
//             Download Resume
//             <FileDownloadTwoToneIcon style={{ marginLeft: "10px" }} />
//           </Button>
//         </Box>
//       </main>
//     </div>
//   );
// };

// export default ResumePage;
