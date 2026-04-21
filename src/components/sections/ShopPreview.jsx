import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Products
import { getProducts } from "../../services/api";

// Components
import ProductCard from "./ProductCard";
import { AppLink } from '../ui/AppLink';

// Styles
import { grids } from "../../styles/global";

const ShopPreview = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      console.log("API DATA:", data); // 👈 ДИБАГ
      setProducts(data);
    });
  }, []);

  return (
    <section>
      <div className="section">
        <h2>{t("homeShop.title")}</h2>
        <AppLink to="/shop">{t("homeShop.button")}</AppLink>
        <div className={`border border-gray-600 ${grids.shop}`}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;