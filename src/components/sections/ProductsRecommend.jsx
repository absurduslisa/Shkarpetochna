import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api";
import ProductCard from "./ProductCard";

const ProductsRecommend = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      // ❌ прибираємо поточний товар
      const filtered = data.filter(p => p.id !== Number(id));

      // 🎲 shuffle
      const shuffled = filtered.sort(() => 0.5 - Math.random());

      // ✂ беремо 4
      setProducts(shuffled.slice(0, 4));
    });
  }, [id]);

  return (
    <section className="p-6">
      <h2>Recommended 🧦</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default ProductsRecommend;