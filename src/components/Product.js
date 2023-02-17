import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductScreen from '../screens/ProductScreen';

const Product = ({ product }) => {
    return (
        <Card className = 'my-3 p-3 rounded'>
            <Link to={ `/product/${product._id}`} path={ <ProductScreen></ProductScreen> }>
                <Card.Img src={product.image} variant='top' />
            </Link>
            {/* <a href = { `/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a> */}
            <Card.Body>
                <Link to={`/product/${product._id}`} path={<ProductScreen />}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
               
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