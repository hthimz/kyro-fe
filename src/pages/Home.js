import React from "react";
import { Text, Heading, Button, Row, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Layout } from "../common/Layout";

const Home = () => {
  return (
    <Layout>
      <Row justify="center" align="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Marksheet Management
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Kyro
        </Text>
      </Row>
      <Spacer y={8} />
      <Row justify="space-around">
        <Button auto color="gradient" bordered>
          <Link
            to="/upload"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Register Marksheet
          </Link>
        </Button>
        <Button auto color="gradient" bordered>
          <Link
            to="/search"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Retrieve Marksheet
          </Link>
        </Button>
      </Row>
      <Spacer y={4} />
      <Row justify="center">
        <Text blockquote>
          <p>
            To use the application, click on the "Upload Marksheet" button to
            upload your marksheet and save it to the database. <br />
            Alternatively, click on the "Search Marksheet" button to search for
            a marksheet using the roll number.
          </p>
        </Text>
      </Row>
    </Layout>
  );
};

export default Home;

{
  /* <Box padding="2rem">
      <Heading as="h1" fontSize="2rem" marginBottom="2rem">
        Marksheet Management System
      </Heading>
      <Box marginBottom="1rem">
        <Link to="/upload">
          <Button color="primary" shadow>
            Go to Upload Page
          </Button>
        </Link>
      </Box>
      <Box>
        <Link to="/search">
          <Button color="secondary" shadow>
            Go to Search Page
          </Button>
        </Link>
      </Box>
</Box> */
}
