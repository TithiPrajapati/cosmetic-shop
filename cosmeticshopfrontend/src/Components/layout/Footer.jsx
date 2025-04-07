import React from "react";
import "./Footer.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-heading">Explore</h5>
            <Nav className="flex-column">
              <Nav.Link href="/products/skincare">Skincare</Nav.Link>
              <Nav.Link href="/products/makeup">Makeup</Nav.Link>
              <Nav.Link href="/products/perfumes">Perfumes</Nav.Link>
              <Nav.Link href="/products/giftsets">GiftSets</Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="footer-heading">Cosmetic Shop</h5>
            <p className="footer-subtext">Your one-stop beauty shop</p>
          </Col>
          <Col md={4} className="text-end">
            <h5 className="footer-heading">Stay Connected</h5>
            <Nav className="flex-column">
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-subtext">
              &copy; {new Date().getFullYear()} Cosmetic Shop. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
