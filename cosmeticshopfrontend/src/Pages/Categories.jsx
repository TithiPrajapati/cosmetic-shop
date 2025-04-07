// import React, { useState } from "react";
// import { useCategories } from "../Hooks/useCategories";
// import { Nav } from "react-bootstrap"; // Import Bootstrap's Nav

// const Categories = () => {
//   const { categories, loading, error } = useCategories();
//   const [activeCategory, setActiveCategory] = useState(null);

//   if (loading) return <div>Loading categories...</div>;
//   if (error) return <div>Error: {error}</div>;

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category.id);
//   };

//   return (
//     <div className="container">
//       <h1>All Categories</h1>

//       {/* Horizontal nav for categories */}
//       <Nav variant="tabs" className="justify-content-center">
//         {categories.map((category) => (
//           <Nav.Item key={category.id}>
//             <Nav.Link
//               active={category.id === activeCategory}
//               onClick={() => handleCategoryClick(category)}
//               style={{
//                 cursor: "pointer",
//                 fontWeight: category.id === activeCategory ? "bold" : "normal",
//               }}
//             >
//               {category.category_name}
//             </Nav.Link>
//           </Nav.Item>
//         ))}
//       </Nav>

//       {/* Display selected category content */}
//       {activeCategory && (
//         <div className="category-details mt-4">
//           {categories
//             .filter((category) => category.id === activeCategory)
//             .map((category) => (
//               <div key={category.id}>
//                 <h2>{category.category_name}</h2>
//                 <p>{category.category_description}</p>
//               </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categories;
