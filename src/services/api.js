const BASE_URL = "http://localhost:3001";

// GET ALL PRODUCTS
export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("API ERROR:", error);
    return [];
  }
};

// один продукт
export const getProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};

// по категорії (фільтр)
// export const getByCategory = async (category) => {
//   const res = await fetch(
//     `${BASE_URL}/products?category=${category}`
//   );
//   return res.json();
// };