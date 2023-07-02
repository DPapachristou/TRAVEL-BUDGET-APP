import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainPage() {
  return (
    <Container>
      <Row>
        <Col sm>1 of 2</Col>
        <Col sm>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default MainPage;
