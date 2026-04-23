import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Products
import { getProducts } from "../../services/api";

// Components
import ProductCard from "./ProductCard";
import { AppLink } from '../ui/AppLink';

// Img
import arrow from "../../assets/icons/arrow2.png"

// Styles
import { grids } from "../../styles/global";

const ShopPreview = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [products, setProducts] = useState([]);

  useEffect(() => {
  getProducts().then((data) => {
    setProducts(data.slice(0, 8));
  });
}, []);

  return (
    <section>
      <div className="shop">
        <div className="flex flex-col justify-between">
          <h2>{t("homeShop.title")}</h2>
          <AppLink className="homelink flex flex-row gap-4 self-end" img={arrow} to="/shop">{t("homeShop.button")}</AppLink>
        </div>
        <div className={`${grids.shop}`}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;