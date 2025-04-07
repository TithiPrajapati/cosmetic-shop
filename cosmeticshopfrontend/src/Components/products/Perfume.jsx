import React, { useState, useEffect } from "react";
import { getPerfumes } from "../../Services/api";
import ProductItem from "./ProductItem";
import { Container, Row, Col, Spinner, Alert,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

function Perfume() {
  const [perfume, setPerfume] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPerfumes()
      .then((response) => {
        console.log(response.data);
        setPerfume(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5">
       <Nav>
      <Nav.Link as={Link} to="/products/makeup" style={{color:'black'}}>Makeup</Nav.Link>
                        <Nav.Link as={Link} to="/products/skincare" style={{color:'black'}}>Skincare</Nav.Link>
                        <Nav.Link as={Link} to="/products/perfumes" style={{color:'black'}}>Perfumes</Nav.Link>
                        <Nav.Link as={Link} to="/products/giftsets" style={{color:'black'}}>Gift Sets</Nav.Link>
      </Nav>
      <h2 className="text-center mb-4">Perfume</h2>
      {perfume.length === 0 ? (
        <Alert variant="info">No perfume products available at the moment.</Alert>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {perfume.map((product) => (
            <Col key={product.id}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Perfume;