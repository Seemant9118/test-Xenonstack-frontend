import React from 'react'
import './Home.css';
import NavBar from '../../util/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/dec23atf/eoss/unrec/kotak/WA_ETH_3000._CB586338069_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/Kotak/Sports/Frame_320_3000pc._CB586293054_.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3000x1200-heroUnrec._CB570990004_.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className='bodyContainer'>
                <div className='leftContainer'>
                    <img src='https://media.istockphoto.com/id/1215280342/photo/close-up-shot-red-darts-arrows-in-the-target-center-on-dark-blue-sky-background-business.webp?s=2048x2048&w=is&k=20&c=N-BlpG89iT6keRKBHS1fx62CiCvSlKO8o_n6UkcO6TI=' alt='this is an image' />
                </div>
                <div className='rightContainer'>
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower individuals and businesses by providing a trusted and convenient online marketplace where they can discover, shop, and connect. We are committed to fostering a community-driven environment, promoting sustainability, and supporting local and global brands.</p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home