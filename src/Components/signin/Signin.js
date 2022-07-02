import React from "react";
import Header from "../Layout/Header/header";
import { Form, Button, Container,Row,Col } from "react-bootstrap";
import Input from "../UI/input";
import { login }  from "../../actions"
import { useDispatch } from "react-redux";

function Signin() {

  const dispatch = useDispatch();

  const userLogin = (e) =>{

 e.preventDefault();

    const user = {
      email:"anavadhsuresh@gmail.com",
      password:"123456"
    }
    dispatch(login(user));
  }

  return (
    <div> 
      <Header /> 
      <Container>
        <Row className='m-5'> <Form action={userLogin}>
            <Col md={6}>
            <Input label="Email" placeholder="Enter E-mail" value="" type="email" onChange={() => {}} />
               </Col>
        
           <Col md={6}>
           <Input label="Password" placeholder="Enter Password" value="" type="password" onChange={() => {}} />
         </Col>
         
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form></Row>
     

      </Container>
     </div>
    
  );
}

export default Signin;
