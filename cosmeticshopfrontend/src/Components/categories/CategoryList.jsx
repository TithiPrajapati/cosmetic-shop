// import React from "react";
// import { useCategories } from "../../Hooks/useCategories";

// const CategoryList = () => {
//   const { categories, loading, error } = useCategories();

//   if (loading) return <div>Loading categories...</div>;
//   if (error) return <div>Error loading categories: {error}</div>;

//   return (
//     <div>
//       <h2>Categories</h2>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>{category.category_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryList;
