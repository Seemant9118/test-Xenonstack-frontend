import React from 'react'
import NavBar from '../../util/navbar/Navbar'
import Cards from '../../util/cards/Card'
import './Products.css';
import Footer from '../../components/footer/Footer';

const Products = () => {

    const productList = [
        {
            productName: "Samsung Galaxy S10",
            productDesc: "cjhsdbjhsdb sjv sdkjcnsdk ",
            productPrice: "16999",
            productImage:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/g/n/k/-original-imagtyxb86ddjhzh.jpeg?q=90"
        },
        {
            productName: "Sony Experia",
            productDesc: "cjhsdbjhsdb sjv sdkjcnsdk ",
            productPrice: "15990",
            productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7zzC-vB36Z0Kwet0JPNlkx0aoX_fegvi7RfQiFk2zvuzZG52OMWahCYzh2TITwCSVUw&usqp=CAU"
        },
        {
            productName: "Apple - Iphone 13",
            productDesc: "cjhsdbjhsdb sjv sdkjcnsdk ",
            productPrice: "32000",
            productImage:"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674445/Croma%20Assets/Communication/Mobiles/Images/300822_0_on2t4l.png"
        },
        {
            productName: "Realme 10+ Pro 5g",
            productDesc: "cjhsdbjhsdb sjv sdkjcnsdk ",
            productPrice: "21990",
            productImage:"https://www.91-img.com/pictures/150273-v4-realme-10-pro-plus-mobile-phone-large-1.jpg?tr=h-271,c-at_max,q-60,pr-true"
        },
    ]

    return (
        <>
            <NavBar />
            <h1 style={{textAlign:"center",marginTop:"2rem"}}>Our Products</h1>
            <div className='products'>
                {
                    productList.map((item, index) => {
                        return (
                            <Cards key={index} name={item.productName} desc={item.productDesc} price={item.productPrice} image={item.productImage}/>
                        )
                    })
                }
            </div>
            <Footer/>

        </>
    )
}

export default Products