import React, { useState } from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import loginHero from '../../asserts/hero.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from '../home/Home';

const Login = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        user_email: "",
        user_password: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    // handlechange function
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        })
    };

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        const { user_email, user_password } = values;
        if (!user_email || !user_password) {
            setErrorMsg("Fill all fields");
            return;
        } else {
            setErrorMsg("");
            setSubmitButtonDisabled(true);
            axios.post("http://localhost:5000/api/user/login", values)
                .then((res) => {
                    setSuccessMsg("You logged in successfully, now redirecting to Home Page...");
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                })
                .catch((err) => {
                    setErrorMsg("User credentials was wrong , try again",err.message);
                    setTimeout(() => {
                        navigate('/register')
                    },2000);
                });
        }
    };

    return (
        <div className="loginPage">
            <div className="leftHeroImage">
                <img src={loginHero} alt="login" />
            </div>
            <div className='login'>
                <h1>Login Page</h1>
                <div className="form">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder='example@gmail.com' name="user_email" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" name="user_password" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        {successMsg && <div className='successBox'>{successMsg}</div>}
                        {errorMsg && <div className="errorBox">{errorMsg}</div>}
                        <Button variant="success" onClick={handleSubmit} disabled={submitButtonDisabled}>Login</Button>
                        <Link to="/register"><div style={{ color: "black" }}>Don't haven't account? <span className='redirect'>Register</span></div></Link>
                    </Form>
                </div>
            </div>
        </div>

    )
}

export default Login