import React from 'react'
import { Form, Button, Container,Row,Col } from "react-bootstrap";
import Header from '../Layout/Header/header';
import Input from '../UI/input';


function Signup() {
  return (
    <div> 
      <Header />
      <Container>

        <Row className='m-5'>
              <Col md={6}>
          <Input label="First Name" placeholder="First Name" value="" type="text" onChange={() => {}} />
              </Col>

              <Col md={6}>
              <Input label="Last Name" placeholder="Last Name" value="" type="text" onChange={() => {}} />
              </Col>
        </Row>
      <Row className='m-5'> <Form>
        <Col md={6}>
        <Input label="Email" placeholder="Enter Email" value="" type="email" onChange={() => {}} />
            </Col>
        
           <Col md={6}>
           <Input label="Password" placeholder="Password" value="" type="password" onChange={() => {}} />
         </Col>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form></Row>
     

      </Container>
     </div>


  )
}

export default Signup