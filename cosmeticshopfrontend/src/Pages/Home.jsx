import React from 'react';
import { Container, Row, Col, Carousel, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp } from 'lucide-react';
import '../Components/css/HomePage.css';
import perfumeImage from '../assets/perfume.jpg';
import skincareImage from '../assets/skincare.jpg';
import makeupImage from '../assets/makeup.jpg';
import giftSetImage from '../assets/giftset.jpg';
import h1 from '../assets/h1.jpg';

import Products from "./Products";

import riri from "../assets/main-carousel-images/riri.webp"
import aj from "../assets/main-carousel-images/aj.jpg"
// import lip from "../assets/main-carousel-images/lip.jpg"
import random from "../assets/main-carousel-images/random.webp"


const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Luxury Perfume', price: 99.99, image: perfumeImage },
    { id: 2, name: 'Skincare Set', price: 129.99, image: skincareImage },
    { id: 3, name: 'Makeup Palette', price: 59.99, image: makeupImage },
  ];

  const categories = [
    { id: 1, name: 'Perfumes', image: perfumeImage },
    { id: 2, name: 'Skincare', image: skincareImage },
    { id: 3, name: 'Makeup', image: makeupImage },
    { id: 4, name: 'Gift Sets', image: giftSetImage },
  ];

  const testimonials = [
    { id: 1, name: 'Sarah L.', comment: 'I love the quality of products! My skin has never looked better.' },
    { id: 2, name: 'Michael R.', comment: 'Great selection and fast shipping. Will definitely shop here again!' },
    { id: 3, name: 'Emma T.', comment: 'The customer service is outstanding. They really go above and beyond.' },
  ];

  const beautyTips = [
    'Always remove your makeup before bed',
    'Stay hydrated for healthy, glowing skin',
    'Use sunscreen daily, even on cloudy days',
    'Exfoliate once a week for smoother skin',
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to Your Beauty Store</h1>
              <p className="lead">Discover luxury beauty products made for you.</p>
              <Button
                as={Link}
                to="/products"
                variant="black"
                size="lg"
                className="mt-3 hover-black"
              >
                Shop Now <ChevronRight size={20} />
              </Button>
            </Col>
            <Col md={6}>
              <img src={h1} alt="Hero" className="img-fluid rounded shadow-lg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-celebrities py-5">
        <container>
        <h2 className="text-center mb-4">FACES OF DIOR</h2>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={riri} // Replace with actual image
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>J'adore X Rihanna</h3>
                <p>Your dreams, make them real</p>
        
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={random} // Replace with actual image
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Beauty products</h3>
                <p>Some text about the second slide</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={aj} // Replace with actual image
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Makeup</h3>
                <p>Some text about the third slide</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </container>
      </section>


      {/* Featured Products Carousel */}
      <section className="featured-products py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Products</h2>
          <Carousel>
            {featuredProducts.map((product) => (
              <Carousel.Item key={product.id}>
                <img className="d-block w-100" src={product.image} alt={product.name} />
                <Carousel.Caption className="bg-black bg-opacity-75 rounded">
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-4">Shop by Category</h2>
          <Row>
            {categories.map((category) => (
              <Col key={category.id} md={3} className="mb-4">
                <Card className="h-100 shadow-sm hover-shadow transition">
                  <Card.Img variant="top" src={category.image} alt={category.name} />
                  <Card.Body className="d-flex flex-column" >
                    <Card.Title style={{fontFamily:'Times New Roman'}}>{category.name}</Card.Title>
                    <Button
                      as={Link}
                      to={`/products/${category.name.toLowerCase()}`}
                      variant="black"
                      className="mt-auto hover-black font-md"
                      style={{fontFamily:'Times New Roman'}}
                    >
                      Explore
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <Container>
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <Row>
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body>
                    <Card.Text>"{testimonial.comment}"</Card.Text>
                    <footer className="blockquote-footer mt-2">{testimonial.name}</footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Beauty Tips Section */}
      <section className="beauty-tips py-5">
        <Container>
          <h2 className="text-center mb-4">Beauty Tips & Trends</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <ListGroup variant="flush" >
                    {beautyTips.map((tip, index) => (
                      <ListGroup.Item key={index} style={{fontFamily:'Times New Roman'}}>
                        <TrendingUp size={20} className="me-2 text-black" />
                        {tip}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for exclusive offers and beauty tips.</p>
              <form className="d-flex">
                <input type="email" className="form-control me-2" placeholder="Enter your email" />
                <Button variant="black" type="submit" className="hover-black">
                  Subscribe
                </Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;