import React from 'react';
import {Button, Card} from "react-bootstrap";

function Products(props) {
    const {product, onAdd}= props
    return (
        <div>

            <Card style={{ width: '18rem',margin:"10px auto" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" onClick={()=>onAdd(product)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Products;