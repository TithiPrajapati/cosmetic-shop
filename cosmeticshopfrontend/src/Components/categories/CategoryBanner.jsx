import React from "react";
import { useCategories } from "../../Hooks/useCategories";
import { Container, Spinner, Alert } from "react-bootstrap";
import bestseller from "../../assets/category-banner/bestseller.jpg";
import makeup from "../../assets/category-banner/makeup.webp";
import perfumes from "../../assets/category-banner/perfumes.webp";
import skincare from "../../assets/category-banner/skincare.webp";
import "./CategoryBanner.css";

const CategoryBanner = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error loading categories: {error}</Alert>;
  }

  // Image matcher for categories
  const matcher = {
    1: {
      img: bestseller,
      title: "Best Sellers",
      description: "Explore our top-rated products loved by many!",
    },
    2: {
      img: makeup,
      title: "Makeup",
      description: "Discover our collection of stunning makeup essentials.",
    },
    3: {
      img: skincare,
      title: "Skincare",
      description: "Find nourishing skincare products to pamper your skin.",
    },
    4: {
      img: perfumes,
      title: "Perfumes",
      description: "Indulge in our luxurious range of fragrances.",
    },
  };

  return (
    <Container fluid className="p-0">
      {categories.map((category) => (
        <div key={category.id} className="category-banner">
          <img
            src={matcher[category.id]?.img}
            alt={category.category_name}
            className="category-banner-image"
          />
          <div className="category-banner-content">
            <h2>{matcher[category.id]?.title || category.category_name}</h2>
            <p>
              {matcher[category.id]?.description ||
                "Explore our collection in this category."}
            </p>
            <button className="explore">Explore</button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CategoryBanner;