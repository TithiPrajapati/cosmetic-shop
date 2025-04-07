// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function Categories() {
//   const [Category, setCategory] = useState([]);
//   const [Bestseller, setBestseller] = useState([]);

//   useEffect(() => {
//     async function getCategories() {
//       try {
//         const category = await axios.get("http://127.0.0.1:8000/categories/");
//         console.log(category.data);
//         setCategory(category.data);
//       } catch (e) {
//         console.log("the error is : ", e);
//       }
//     }
//     getCategories();
//   }, []);

//   return (
//     <>
//       <h1>Categories</h1>
//       {Category.map((category, i) => (
//         <div key={i}>
//           <h2>{category.category_name}</h2>
//           <div>{category.category_description}</div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Categories;
