import React from "react";

import { Row, Col } from "react-bootstrap";

import Navigation from "./Navigation";

const Admin = (props) => {
  return (
    <>
      <br />
      <Row>
        <Col align={"center"}>
          <Navigation />
        </Col>
      </Row>
      <br />
    </>
  );
};

export default Admin;
