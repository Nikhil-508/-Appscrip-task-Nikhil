import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import './Card.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCards = () => {
  const [item, setItem] = useState([]);

  //using async fucntion and fetch method to get the fakestore API
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
    <Row className="justify-content-center">
      {item.map((product) => (
        <Col className=" my-3" key={product.id} md={4} lg={{ span: 4, offset: 1 }}> 
          <div className='cardStyle'> 
            <Card style={{ width: '13rem', marginBottom: '10px' }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description ? product.description.slice(0, 90) : "More data about this news is not available right now"}
                  <FiHeart />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCards;
