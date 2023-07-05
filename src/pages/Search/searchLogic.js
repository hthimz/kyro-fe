import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../utils/constants";

const SearchLogic = () => {
  let navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    if (rollNumber) {
      try {
        const response = await fetch(`${API_ENDPOINT}/students/${rollNumber}`);
        if (response.ok) {
          const data = await response.json();
          setResult(data);
          setError(null);
          setLoading(false);
        } else {
          setResult(null);
          setError("Marksheet not found");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error:", error);
        setResult(null);
        setLoading(false);
        setError("An error occurred while searching for the marksheet");
      }
    }
  };

  return {
    navigate,
    rollNumber,
    setRollNumber,
    result,
    setResult,
    error,
    setError,
    handleRollNumberChange,
    handleSearch,
    loading,
  };
};

export default SearchLogic;
