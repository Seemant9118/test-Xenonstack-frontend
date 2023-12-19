import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import NavBar from '../../util/navbar/Navbar';
import './ContactUs.css';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const navigate = useNavigate();

    const [values, setValues] = useState({
        user_name: "",
        user_email: "",
        user_number: "",
        user_queries: ""
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setValues((prevValues) => {
            return { ...prevValues, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { user_name, user_email, user_number } = values;
        if (!user_name || !user_email || !user_number) {
            setErrorMsg("Fill all fields");
            return;
        } else {
            setErrorMsg("");
            setSubmitButtonDisabled(true);
            axios.post("http://localhost:5000/api/contact/contactus", values)
                .then((res) => {
                    console.log(res.data.message);
                    setSuccessMsg("Your contact detail is saved in our record, we will catch you up shortly.")
                    setTimeout(()=>{
                        navigate('/')
                    },2000);
                })
                .catch((err) => console.log(err));
        }

    }
    return (
        <>
            <NavBar />
            <div className='contact-page'>
                <div className='HeroImage'>
                    <img src='https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hero image' />
                </div>
                <div className='Contact-Us'>
                    <h1>Contact Us</h1>
                    <div className="form">
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Name
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder='your full name' name="user_name" onChange={handleChange} />
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
                                    Number
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder='your number' name="user_number" onChange={handleChange} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Message
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" placeholder='Enter your message' name="user_queries" onChange={handleChange} />
                                </Col>
                            </Form.Group>

                            {successMsg && <div className='successBox'>{successMsg}</div>}
                            {errorMsg && <div className="errorBox">{errorMsg}</div>}
                            <Button variant="success" onClick={handleSubmit} disabled={submitButtonDisabled}>Submit</Button>

                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs