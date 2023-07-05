import React from "react";
import {
  Container,
  Card,
  Input,
  Button,
  Text,
  Table,
  Loading,
} from "@nextui-org/react";
import SearchLogic from "./searchLogic";
import { constants } from "../../utils/constants";

const SearchPage = () => {
  const {
    navigate,
    rollNumber,
    result,
    error,
    handleRollNumberChange,
    handleSearch,
    loading,
  } = SearchLogic();

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        justify="center"
        variant="bordered"
        isHoverable
        css={{ mw: "400px" }}
      >
        <Card.Body>
          <Text
            h3
            align="center"
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
          >
            {constants.SEARCH_MARKSHEET_TITLE}
          </Text>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Input
              type="text"
              placeholder={constants.SEARCH_INPUT_PLACEHOLDER}
              color="success"
              bordered
              value={rollNumber}
              onChange={handleRollNumberChange}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleSearch} disabled={!rollNumber}>
              {constants.SEARCH_BUTTON_TEXT}
            </Button>
          </div>
        </Card.Body>
        {loading && (
          <Loading color="secondary" textColor="secondary">
            {constants.SEARCH_LOADING_TEXT}
          </Loading>
        )}
      </Card>
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
        <Text align="center" style={{ marginTop: "2rem" }}>
          {error}
        </Text>
      )}
      <div style={{ marginTop: "2rem", alignSelf: "center" }}>
        <Button
          onClick={() => {
            navigate("/");
          }}
          color="gradient"
        >
          {constants.NAVIGATE_HOME_TEXT}
        </Button>
      </div>
    </Container>
  );
};

export default SearchPage;
