const BASE_URL = "http://localhost:3001";

// GET ALL PRODUCTS
export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const data = await res.json();
  return data; // 👈 це МАСИВ
};

// один продукт
export const getProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

// по категорії (json-server фільтр)
export const getByCategory = async (category) => {
  const res = await fetch(
    `${BASE_URL}/products?category=${category}`
  );
  return res.json();
};