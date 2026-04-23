import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api";
import { useTranslation } from "react-i18next";
import ProductCard from "./ProductCard";

const ProductsRecommend = () => {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const filtered = data.filter(p => p.id !== id);

      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      setProducts(shuffled.slice(0, 4));
    });
  }, [id]);

  return (
    <section className="p-6">
      <div className="section">
        <h2>Recommended 🧦</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(p => (
            <ProductCard key={p.id} product={p} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsRecommend;