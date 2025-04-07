// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getProductById } from "../Services/api";
// import {
//   Container,
//   Row,
//   Col,
//   Image,
//   Button,
//   Spinner,
//   Alert,
//   Card,
// } from "react-bootstrap";
// import { Star, StarFill } from "react-bootstrap-icons";
// import "../Components/css/ProductDetail.css";

// const ProductDetail = () => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { product_id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     getProductById(product_id)
//       .then((response) => {
//         setProduct(response.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [product_id]);

//   if (loading)
//     return (
//       <Container
//         className="d-flex justify-content-center align-items-center"
//         style={{ height: "100vh" }}
//       >
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </Container>
//     );

//   if (error)
//     return (
//       <Container className="mt-5">
//         <Alert variant="danger">Error: {error}</Alert>
//       </Container>
//     );

//   if (!product)
//     return (
//       <Container className="mt-5">
//         <Alert variant="warning">Product not found</Alert>
//       </Container>
//     );

//   const renderRatingStars = (rating) => {
//     let stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         i <= rating ? (
//           <StarFill key={i} className="text-warning" />
//         ) : (
//           <Star key={i} className="text-warning" />
//         )
//       );
//     }
//     return stars;
//   };

//   const handleAddToWishlist = () => {
//     // Get the existing wishlist from localStorage or initialize an empty array
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     // Check if the product is already in the wishlist to prevent duplicates
//     const isProductInWishlist = wishlist.some(
//       (item) => item.product_id === product.product_id
//     );

//     if (!isProductInWishlist) {
//       // Add the current product to the wishlist
//       wishlist.push(product);

//       // Save the updated wishlist to localStorage
//       localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     }

//     // Navigate to the wishlist page after adding the product
//     navigate("/products/wishlist");
//   };

//   const handleAddToCart = () => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Check if product is already in the cart
//     const existingItem = storedCart.find((item) => item.id === product.id);
//     if (existingItem) {
//       existingItem.quantity += 1; // Increment quantity if already in cart
//     } else {
//       storedCart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
//     }

//     localStorage.setItem("cart", JSON.stringify(storedCart));
//     setCartMessage("Added to Cart!");
//     setTimeout(() => {
//       setCartMessage("");
//     }, 2000);
//   };

//   return (
//     <Container className="my-5 product-detail">
//       <Card className="border-0 shadow">
//         <Row className="g-0">
//           <Col md={6} className="p-4">
//             <div className="image-container">
//               <Image
//                 src={product.product_image}
//                 alt={product.product_name}
//                 fluid
//                 className="product-image"
//               />
//             </div>
//           </Col>
//           <Col md={6}>
//             <Card.Body className="d-flex flex-column h-100">
//               <Card.Title className="display-4 mb-3 ">
//                 {product.product_name}
//               </Card.Title>
//               <Card.Subtitle className="mb-3 text-muted">
//                 {renderRatingStars(product.product_rating)}
//                 <span className="ms-2">({product.product_rating} / 5)</span>
//               </Card.Subtitle>
//               <Card.Text className="fs-2 mb-4" style={{color : 'black'}}>
//                 ₹{product.product_price}
//               </Card.Text>
//               <Card.Text className="mb-4">{product.product_description}</Card.Text>
//               <div className="mt-auto">
//                 <Button  size="lg" className="me-3"  style={{ backgroundColor: 'black', color: 'white' }} onClick={handleAddToCart}>
//                   Add to Cart
//                 </Button>
//                 <Button
//                   variant="outline-secondary"
//                   size="lg"
//                   onClick={handleAddToWishlist}
//                 >
//                   Add to Wishlist
//                 </Button>
//               </div>
//             </Card.Body>
//           </Col>
//         </Row>
//       </Card>
//     </Container>
//   );
// };

// export default ProductDetail;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../Services/api";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Spinner,
  Alert,
  Card,
} from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import "../Components/css/ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlistMessage, setWishlistMessage] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const { product_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(product_id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [product_id]);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="mt-5">
        <Alert variant="warning">Product not found</Alert>
      </Container>
    );
  }

  const renderRatingStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarFill key={i} className="text-warning" />
        ) : (
          <Star key={i} className="text-warning" />
        )
      );
    }
    return stars;
  };

  const handleAddToWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedWishlist = [...storedWishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistMessage("Added to Wishlist!");
    setTimeout(() => {
      setWishlistMessage("");
      navigate("/wishlist"); // Redirect after adding
    }, 2000);
  };

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product is already in the cart
    const existingItem = storedCart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if already in cart
    } else {
      storedCart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
    }

    localStorage.setItem("cart", JSON.stringify(storedCart));
    setCartMessage("Added to Cart!");
    setTimeout(() => {
      setCartMessage("");
    }, 2000);
  };

  return (
    <Container className="my-5 product-detail">
      <Card className="border-0 shadow">
        <Row className="g-0">
          <Col md={6} className="p-4">
            <div className="image-container">
              <Image
                src={product.product_image}
                alt={product.product_name}
                fluid
                className="product-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <Card.Body className="d-flex flex-column h-100">
              <Card.Title className="display-4 mb-3">
                {product.product_name}
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                {renderRatingStars(product.product_rating)}
                <span className="ms-2">({product.product_rating} / 5)</span>
              </Card.Subtitle>
              <Card.Text className="fs-2 mb-4" style={{ color: "black" }}>
                ₹{product.product_price}
              </Card.Text>

              {/* <Card.Text className="fs-5 text-danger mb-4">
                Discount: ₹
                {product.discount ? product.discount.toFixed(2) : "No discount"}
              </Card.Text> */}

              
              <Card.Text className="mb-4">
                {product.product_description}
              </Card.Text>
              {wishlistMessage && (
                <Alert variant="success">{wishlistMessage}</Alert>
              )}
              {cartMessage && <Alert variant="success">{cartMessage}</Alert>}
              <div className="mt-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={handleAddToCart} // Add to cart on button click
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={handleAddToWishlist}
                >
                  Add to Wishlist
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;

