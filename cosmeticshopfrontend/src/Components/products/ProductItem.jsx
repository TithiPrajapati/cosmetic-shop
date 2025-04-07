import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import '../css/ProductItem.css';

const ProductItem = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleViewDetails = () => {
    navigate(`/products/${product.product_id}`);
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
        <Card.Title className="product-title mb-1">{product.product_name}</Card.Title>
        <div className="price-container mb-2">
          <span className="current-price">₹{product.product_price}</span>
        </div>
        <Button
  style={{ backgroundColor: 'black', color: 'white' }}
  className="mt-auto view-details-btn"
  onClick={handleViewDetails}
>
  View Details
</Button>

      </Card.Body>
    </Card>
  );
};

export default ProductItem;