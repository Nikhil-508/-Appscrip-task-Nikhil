import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import './Card.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCards = () => {
  const [item, setItem] = useState([]);

  const getItem = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const items = await response.json();
      setItem(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Row>
      {item.map((product) => (
        <Col md={4} key={product.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description?product.description.slice(0,90):"More data about this news is not available right now"}
                <FiHeart />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCards;
