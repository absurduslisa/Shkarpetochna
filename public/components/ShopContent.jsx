import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { borders } from "../styles/global";

function Shop({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the Fake Store API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/test");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);


  // Filter products based on search term and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Filters Section */}
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Product Listings */}
      <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-col-4 gap-6 mt-8 ${borders.border_all}`}>
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Shop;