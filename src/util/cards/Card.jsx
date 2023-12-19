import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({name,desc,price,image}) => {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Button variant="success">₹{price}</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards