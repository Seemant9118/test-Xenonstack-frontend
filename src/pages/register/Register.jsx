import React, { useState } from 'react'
import './Register.css';
import loginHero from '../../asserts/hero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    // handleChange function
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
        const { user_name, user_email, user_password } = values;
        if (!user_name || !user_email || !user_password) {
            setErrorMsg("Fill all fields");
            return;
        }
        else {
            setErrorMsg("");
            setSubmitButtonDisabled(true);
            axios.post("http://localhost:5000/api/user/register", values)
                .then(res => {
                    setSuccessMsg("You registered successfully , now login with same credentials...")
                    setTimeout(()=>{
                        navigate("/login");
                    },2000);
                })
                .catch(err => {
                    setErrorMsg("Something is wrong, please try again or fill correct detail");
                    setSuccessMsg("");
                });
        }
    };

    return (
        <div className='registrationPage'>
            <div className="leftHeroImage">
                <img src={loginHero} alt="login" />
            </div>
            <div className="registration">
                <h1>Registration Page</h1>
                <div className="form">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Full Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder='Your Full Name' name="user_name" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="email" placeholder='example@gmail.com' name="user_email" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder='Password' name="user_password" onChange={handleChange} />
                            </Col>
                        </Form.Group>
                        {successMsg && <div className='successBox'>{successMsg}</div>}
                        {errorMsg && <div className="errorBox">{errorMsg}</div>}
                        <Button variant="danger" onClick={handleSubmit} disabled={submitButtonDisabled}>Register</Button>
                        <Link to="/login"><div style={{color:"black"}}>Already have an account?<span className='redirect-to-login'>Login</span> </div></Link>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Register