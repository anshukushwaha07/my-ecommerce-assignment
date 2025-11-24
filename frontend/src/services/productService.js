import API from "../api/api";

// Get all products (simple list)
export const getAllProducts = async () => {
  const res = await API.get("/products/all");
  return res.data;  // array
};

// Get paginated + filtered + sorted products
export const getProducts = async (params = {}) => {
  const res = await API.get("/products", { params });
  return res.data;  // { page, total, products }
};

// Search by name
export const searchProducts = async (term) => {
  const res = await API.get("/search", { params: { q: term } });
  return res.data; // array
};
