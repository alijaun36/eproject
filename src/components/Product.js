import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import HomeScreen from '../screens/HomeScreen';

const Product = ({ product }) => {
    return (
        <Card className = 'my-3 p-3 rounded'>
            <Link to={ `/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            {/* <a href = { `/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a> */}
            <Card.Body>
                <a href={`/poduct/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
            <Card.Text as='div'>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text as ='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
       
    )
}

export default Product;