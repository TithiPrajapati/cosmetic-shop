import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "../css/Layout.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import cd from "../../assets/cd.png"
const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post(
          "/login/",
          {},
          {
            headers: { Authorization: `Token ${token}` },
          }
        )
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  return (
    <div className="layout">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Row className="w-100">
              <Col xs={12} className="d-flex justify-content-center">
                <Navbar.Brand href="/">
                  {/* <img id="brand" src={cd} alt="Your Store" /> */}
                  <div style={{fontFamily:"Libre Baskerville"}} className="brand">
                    CHRISTIAN DIOR
                  </div>
                  
                </Navbar.Brand>
              </Col>
              <Col xs={12} className="d-flex">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Col>
              <Col xs={12}>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto justify-content-center">
                    {location.pathname === "/categories" ? (
                      <>
                        <Nav.Link as={Link} to="/products/makeup">Makeup</Nav.Link>
                        <Nav.Link as={Link} to="/products/skincare">Skincare</Nav.Link>
                        <Nav.Link as={Link} to="/products/perfumes">Perfumes</Nav.Link>
                        <Nav.Link as={Link} to="/products/giftsets">Gift Sets</Nav.Link>
                      </>
                    ) : (
                      <>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        {!user ? (
                          <>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                          </>
                        ) : (
                          <>
                            <Nav.Link as={Link} to="/profile">Welcome, {user.username}</Nav.Link>
                            <Button variant="link" onClick={handleLogout}>Logout</Button>
                          </>
                        )}
                      </>
                    )}
                  </Nav>

                  <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/wishlist">
                      <FontAwesomeIcon icon={faHeart} size="lg" />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;