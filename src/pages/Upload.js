import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Card, Text, Button } from "@nextui-org/react";

const UploadPage = () => {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch("http://3.234.67.196:8000/upload", {
          method: "POST",
          body: formData,
          redirect: "follow",
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data);
          setError(null);
        } else {
          setError("Failed to process the marksheet");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred during the upload");
      }
    }
  };

  return (
    <Container>
      <Grid.Container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        {!result && !error && (
          <Grid xs={12} justify="center">
            <Card>
              <Card.Body>
                <Text h3 align="center">
                  Upload Your Marksheet
                </Text>
                <Card bordered shadow>
                  <Card.Body>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </Card.Body>
                </Card>
                <Button disabled={!file} onClick={handleUpload}>
                  Upload
                </Button>
              </Card.Body>
            </Card>
          </Grid>
        )}
        {result && (
          <Grid xs={12} justify="center">
            <Card>
              <Card.Body>
                <Text h3 align="center">
                  {result.name}
                </Text>
                <Text align="center">{`Roll Number: ${result.rollNumber}`}</Text>
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
          </Grid>
        )}
        {error && (
          <Grid xs={12} justify="center">
            <Card>
              <Card.Body>
                <Text align="center">{error}</Text>
              </Card.Body>
            </Card>
          </Grid>
        )}
        <Grid xs={12} justify="center">
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default UploadPage;
