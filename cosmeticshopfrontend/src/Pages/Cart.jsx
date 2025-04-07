import React, { useState, useEffect } from "react";
import { Container, ListGroup, Button, Alert } from "react-bootstrap";
import '../Components/css/global.css'
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Load cart from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.product_id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDelete = (productId) => {
    const updatedCart = cart.filter((item) => item.product_id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setMessage("Item removed from cart.");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <Container className="my-5">
      {message && <Alert variant="success">{message}</Alert>}
      <h2>Your Cart</h2>
      <ListGroup>
        {cart.length > 0 ? (
          cart.map((item) => (
            <ListGroup.Item
              key={item.product_id}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{item.product_name}</h5>
                <img
                  src={item.product_image}
                  alt={item.product_name}
                  style={{ width: "50px", height: "50px" }}
                />
                <p>Price: ₹{item.product_price}</p>
                <div>
                  <label>Quantity: </label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleUpdateQuantity(
                        item.product_id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
              <Button
                variant="danger"
                onClick={() => handleDelete(item.product_id)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ListGroup>
    </Container>
  );
};

export default Cart;
