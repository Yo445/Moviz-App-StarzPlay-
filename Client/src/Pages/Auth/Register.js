import React from 'react'
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './css/Rigester.css'
export default function Register() {
  return (
    <Form className='register-container'>
          <h1>Registeration Form</h1>
          <Alert variant={'danger'} className='p-2'>
          This simple Alert
        </Alert>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Your email!" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  )
}
