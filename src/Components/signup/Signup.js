import React from 'react'
import { Form, Button, Container,Row,Col } from "react-bootstrap";
import Header from '../Layout/Header/header';

function Signup() {
  return (
    <div> 
      <Header />
      <Container>

        <Row className='m-5'>
              <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first Name" />
          </Form.Group>
              </Col>

              <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last Name" />
          </Form.Group>
              </Col>
        </Row>
      <Row className='m-5'> <Form>
        <Col md={6}>  <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group></Col>
        
           <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group></Col>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form></Row>
     

      </Container>
     </div>


  )
}

export default Signup