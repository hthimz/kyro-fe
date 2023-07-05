import React from "react";
import { Text, Button, Row, Spacer } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Layout } from "../../common/Layout";
import { constants } from "../../utils/constants";

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
          {constants.TITLE}
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
          {constants.BRAND_NAME}
        </Text>
      </Row>
      <Spacer y={8} />
      <Row justify="space-around">
        <Button auto color="gradient" bordered>
          <Link
            to="/upload"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {constants.REGISTER_MARKSHEET}
          </Link>
        </Button>
        <Button auto color="gradient" bordered>
          <Link
            to="/search"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {constants.RETRIEVE_MARKSHEET}
          </Link>
        </Button>
      </Row>
      <Spacer y={4} />
      <Row justify="center">{constants.SHORT_HOW_TO()}</Row>
    </Layout>
  );
};

export default Home;
