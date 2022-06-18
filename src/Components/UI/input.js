import React from 'react'
import { Form } from 'react-bootstrap'


function input(props) {
  return (
    <div>
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.Label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
            <Form.Text className="text-muted">
              {props.errors}
            </Form.Text>
   </Form.Group>
     </div>
  )
}

export default input