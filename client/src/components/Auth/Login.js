import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import AuthContext from "../../context/AuthContext";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:3001/auth/login", loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    
    <Container>
        <Form className="login-form mx-auto" onSubmit={login}>
        <h5>Log into Snüze</h5>
    <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
    </Form.Group>
    <Button type="submit">
        Login
    </Button>
    <Form.Text className="text-muted">
        Don't have a login? Click <a href="/register">here</a> to register.
        </Form.Text>
    </Form>
    </Container>
    
  )
}

export default Login;