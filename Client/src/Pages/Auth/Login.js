import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './css/Login.css'
function Login() {
  return (
    <Form className='login-container'>
          <h1>Login Form</h1>
          <Alert variant={'danger'} className='p-2'>
          This simple Alert
        </Alert>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter Your email!" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;