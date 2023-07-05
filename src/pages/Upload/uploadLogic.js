import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../utils/constants";

const UploadLogic = () => {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    setLoading(true);
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(`${API_ENDPOINT}/upload`, {
          method: "POST",
          body: formData,
          redirect: "follow",
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data);
          setLoading(false);
          setError(null);
        } else {
          setError("Failed to process the marksheet");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred during the upload");
        setLoading(false);
      }
    }
  };

  return {
    navigate,
    file,
    setFile,
    result,
    setResult,
    error,
    setError,
    handleFileChange,
    handleUpload,
    loading,
  };
};

export default UploadLogic;
