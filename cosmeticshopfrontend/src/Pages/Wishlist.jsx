import React, { useState, useEffect } from "react";
import { Container, ListGroup, Button, Alert, Row, Col } from "react-bootstrap";
import "../Components/css/Wishlist.css"; // Import your CSS file for additional styles

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleDelete = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setMessage("Item removed from wishlist.");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <Container className="my-5">
      {message && <Alert variant="success">{message}</Alert>}
      <h2 className="text-center mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-center">Your wishlist is empty.</p>
      ) : (
        <ListGroup>
          <Row>
            {wishlist.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <ListGroup.Item className="d-flex flex-column align-items-center">
                  <img
                    src={item.product_image}
                    alt={item.product_name}
                    className="wishlist-image"
                  />
                  <h5 className="mt-2">{item.product_name}</h5>
                  <p>Price: ₹{item.product_price}</p>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item.id)}
                    className="mt-2"
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              </Col>
            ))}
          </Row>
        </ListGroup>
      )}
    </Container>
  );
};

export default Wishlist;
