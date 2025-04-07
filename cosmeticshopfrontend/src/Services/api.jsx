import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export const getCategories = () => axios.get(`${API_URL}/categories/`);
export const getProducts = () => axios.get(`${API_URL}/products/`);
export const getBestSellers = () =>
  axios.get(`${API_URL}/products/bestsellers/`);

export const getMakeup = () => axios.get(`${API_URL}/products/makeup/`);
export const getProductById = (product_id) =>
  axios.get(`${API_URL}/products/${product_id}/`);

export const getSkincare = () => axios.get(`${API_URL}/products/skincare/`);
export const getPerfumes = () => axios.get(`${API_URL}/products/perfumes/`);
export const getGiftSets = () => axios.get(`${API_URL}/products/giftsets/`);

export const addToWishlist = async (productId) => {
  const userId = "your_unique_user_identifier"; // For demo purposes, you can use a hardcoded ID
  const response = await axios.post("http://127.0.0.1:8000/wishlist/add/", {
    product_id: productId,
    user_id: userId,
  });
  return response;
};

export const getWishlist = () => {
  // You can also fetch this from an API if needed
  return JSON.parse(localStorage.getItem("wishlist")) || [];
};


export const removeFromWishlist = async (productId) => {
  const response = await axios.delete(`${API_URL}wishlist/${productId}/`, { withCredentials: true });
  return response.data;
};

// export const register = (username, email, password) => 
//   axios.post(`${API_URL}account/register/`, { username, email, password });

// export const login = (username, password) => 
//   axios.post(`${API_URL}account/token/`, { username, password });

// export const refreshToken = (refresh) => 
//   axios.post(`${API_URL}account/token/refresh/`, { refresh });

// export const getUserInfo = () => 
//   axios.get(`${API_URL}account/user/`, { withCredentials: true });

export const addToCart = async (productId, quantity = 1) => {
  const response = await axios.post("http://127.0.0.1:8000/cart/add/", {
    product_id: productId,
    quantity,
  });
  return response.data;
};

export const getCart = async () => {
  const response = await fetch("http://127.0.0.1:8000/cart/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

