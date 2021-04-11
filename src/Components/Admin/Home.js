import React from "react";
import { Row, Col } from "react-bootstrap";
import AddTheartersForm from "./AddTheartersForm";
import AddMoviesForm from "./AddMoviesForm";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <AddTheartersForm />
        </Col>
      </Row>
      <hr
        style={{
          color: "grey",
          backgroundColor: "grey",
          height: 0.5,
          borderColor: "grey"
        }}
      />
      <Row>
        <Col>
          <AddMoviesForm />
        </Col>
      </Row>
    </>
  );
}
