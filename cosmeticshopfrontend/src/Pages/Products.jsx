import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../Services/api";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/css/ProductItem.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilteredProducts();
  }, [filters]);

  const fetchFilteredProducts = () => {
    setLoading(true);
    getProducts(filters)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
    });
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <Container>
      <h1 className="my-4">Our Products</h1>

      {/* Filters Section */}
      <Form className="mb-4">
        <Row>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="perfumes">Perfumes</option>
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup</option>
                <option value="giftsets">Gift Sets</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Min Price</Form.Label>
              <Form.Control
                type="number"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="number"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                name="rating"
                value={filters.rating}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="4">4 & Above</option>
                <option value="3">3 & Above</option>
                <option value="2">2 & Above</option>
                <option value="1">1 & Above</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="black"
          className="hover-black me-2 mt-3"
          onClick={handleResetFilters}
        >
          Reset Filters
        </Button>
      </Form>

      {/* Products Section */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.product_id}>
            <ProductCard product={product} onViewDetails={handleProductClick} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ProductCard = ({ product, onViewDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="product-card h-100 animate-card">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={product.product_image}
          alt={product.product_name}
          className="product-image"
        />
        <Button
          variant="link"
          className="favorite-btn"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <HeartFill className="text-danger" />
          ) : (
            <Heart className="text-muted" />
          )}
        </Button>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="product-title mb-1">
          {product.product_name}
        </Card.Title>
        <div className="price-container mb-2">
          <span className="current-price">₹{product.product_price}</span>
        </div>
        <Button
          className="mt-auto view-details-btn black-button hover-black"
          onClick={() => onViewDetails(product.product_id)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Products;