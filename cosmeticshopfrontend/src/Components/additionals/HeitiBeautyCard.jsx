import React, { useEffect, useState, useRef } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sample from "../../assets/category-banner/parallax.webp";

const HeitiBeautyCard = () => {
  const [offset, setOffset] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardTop = cardRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 640;
        setOffset((windowHeight - cardTop) * 0.5); // Adjust parallax speed
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Parallax Section */}
      <div
        ref={cardRef}
        className="position-relative overflow-hidden"
        style={{ height: "80vh", width: "100%", marginBottom: "2em" }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${sample})`,
            backgroundAttachment: "fixed", // Keeps the image in place
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offset}px)`, // JavaScript-based parallax
            transition: "transform 0.1s ease-out",
          }}
        />

        <div
          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent black overlay
            zIndex: 1,
          }}
        >
          <Card
            className="text-white border-0 bg-transparent w-75"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.85)", // More opaque black card
            }}
          >
            <Card.Body>
              <Container>
                <Card.Title as="h2" className="mb-4 fw-bold">
                  HEITI IS BOLD CLEAN COLOR. DESIGNED SUSTAINABLY
                </Card.Title>
                <Card.Text className="mb-4 fs-5">
                  WE BELIEVE CLEAN MAKEUP DOESN'T HAVE TO BE MINIMAL
                </Card.Text>
                <Card.Text className="mb-5">
                  Heiti formulas are bold & expressive with richly-pigmented,
                  stay-true color payoff that won't fade. They're also clean,
                  100% vegan & cruelty-free, formulated without parabens,
                  phthalates, sulfates, or synthetic fragrances.
                </Card.Text>
                <Row>
                  <Col xs={3} className="text-center">
                    <i className="bi bi-stars mb-2 fs-4"></i>
                    <p>CLEAN</p>
                  </Col>
                  <Col xs={3} className="text-center">
                    <i className="bi bi-emoji-smile mb-2 fs-4"></i>
                    <p>BOLD</p>
                  </Col>
                  <Col xs={3} className="text-center">
                    <i className="bi bi-flower1 mb-2 fs-4"></i>
                    <p>VEGAN</p>
                  </Col>
                  <Col xs={3} className="text-center">
                    <i className="bi bi-heart mb-2 fs-4"></i>
                    <p>CRUELTY FREE</p>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Grey Section After Parallax */}
    </div>
  );
};

export default HeitiBeautyCard;
