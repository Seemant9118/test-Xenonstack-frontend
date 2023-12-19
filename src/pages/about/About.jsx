import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../util/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
const About = () => {
    return (
        <>
            <NavBar />
            <header style={{ paddingLeft: 0 }}>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", height: 600 ,widht:400}}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100 p-4'>
                            <div className='text-white p-3'>
                                <h1 className='mb-5'>About Us</h1>
                                <h3 className='mb-3'>Groshop Ecom is an ecommerce app</h3>
                                <p className='mb-3'>"Shop the World, Delivered to Your Doorstep."</p>
                                <Link to='/contact' className='btn btn-outline-light btn-lg mt-5' role='button'>
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer/>
        </>
    )
}

export default About