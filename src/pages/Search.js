import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Input, Button, Text } from "@nextui-org/react";

const SearchPage = () => {
  let navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  const handleSearch = async () => {
    if (rollNumber) {
      try {
        const response = await fetch(
          `http://54.158.238.49/students/${rollNumber}`
        );
        if (response.ok) {
          const data = await response.json();
          setResult(data);
          setError(null);
        } else {
          setResult(null);
          setError("Marksheet not found");
        }
      } catch (error) {
        console.error("Error:", error);
        setResult(null);
        setError("An error occurred while searching for the marksheet");
      }
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card>
        <Card.Body>
          <Text h3 align="center">
            Search Marksheet by Roll Number
          </Text>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Input
              type="text"
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={handleRollNumberChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleSearch} disabled={!rollNumber}>
              Search
            </Button>
          </div>
          {result && (
            <Card bordered shadow style={{ marginTop: "2rem" }}>
              <Card.Body>
                <Text h3>{result.name}</Text>
                <Text>{`Roll Number: ${result.rollNumber}`}</Text>
                <table style={{ margin: "auto" }}>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.subjects.map((subject, index) => (
                      <tr key={index}>
                        <td>{subject.subject}</td>
                        <td>{subject.marks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
          )}
          {error && (
            <Text align="center" style={{ marginTop: "2rem" }}>
              {error}
            </Text>
          )}
        </Card.Body>
      </Card>
      <div style={{ marginTop: "2rem", alignSelf: "center" }}>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default SearchPage;
