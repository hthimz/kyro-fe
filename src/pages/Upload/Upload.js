import React from "react";
import {
  Container,
  Grid,
  Card,
  Text,
  Button,
  Loading,
  Table,
} from "@nextui-org/react";
import UploadLogic from "./uploadLogic";
import { constants } from "../../utils/constants";
const UploadPage = () => {
  const {
    navigate,
    file,
    result,
    error,
    handleFileChange,
    handleUpload,
    loading,
  } = UploadLogic();
  return (
    <Container>
      <Grid.Container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        {!result && !error && (
          <Grid xs={12} justify="center">
            <Card variant="bordered" isHoverable css={{ mw: "400px" }}>
              <Card.Body>
                <Text
                  h3
                  align="center"
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                >
                  {constants.UPLOAD_MARKSHEET_TITLE}
                </Text>
                <Card>
                  <Card.Body>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </Card.Body>
                </Card>
                <Button disabled={!file} onClick={handleUpload}>
                  {constants.UPLOAD_BUTTON_TEXT}
                </Button>
              </Card.Body>
              {loading && (
                <Loading color="secondary" textColor="secondary">
                  {constants.UPLOAD_LOADING_TEXT}
                </Loading>
              )}
            </Card>
          </Grid>
        )}
        {result && (
          <Card css={{ mw: "700px" }}>
            <Card.Body>
              <Text h3>{result.name}</Text>
              <Text h4>{`Roll Number: ${result.rollNumber}`}</Text>
              <Table
                css={{
                  height: "auto",
                  minWidth: "100%",
                }}
              >
                <Table.Header>
                  <Table.Column>{constants.SUBJECT_COLUMN_TEXT}</Table.Column>
                  <Table.Column>{constants.MARKS_COLUMN_TEXT}</Table.Column>
                </Table.Header>
                <Table.Body>
                  {result.subjects.map((subject, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{subject.subject}</Table.Cell>
                      <Table.Cell>{subject.marks}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Card.Body>
          </Card>
        )}
        {error && (
          <Grid xs={12} justify="center" alignItems="center">
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
            color="gradient"
          >
            {constants.NAVIGATE_HOME_TEXT}
          </Button>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default UploadPage;
