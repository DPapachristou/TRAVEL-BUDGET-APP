import React from "react";
import Button from "react-bootstrap/Button";
import {Container} from "react-bootstrap" 
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return ( 
    <div className="App">  
   <Container className='p-4'>  
    <Row lg={3}>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>First Time Here?</Card.Title>
            <Card.Text>Create your account today!</Card.Text>
            <Button variant="primary" href="/CreateAccount">Create Account</Button>
          </Card.Body>
        </Card>
      </Col>
      <Card>
        <Card.Body>
          <Card.Title>Already a member?</Card.Title>
          <Card.Text>Your trip is waiting for you</Card.Text>
          <Button variant="primary" href="/login">Sign in</Button>
        </Card.Body>
      </Card>
    </Row>
    </Container>  
    </div>  
  );
}

export default Home;
