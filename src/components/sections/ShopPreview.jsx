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
          <AppLink to="/shop">
            <h2>{t("homeShop.title")}</h2>
          </AppLink>

          <div className="flex flex-row gap-4 sm:gap-10 md:gap-20 lg:gap-24 items-center">
            <div className="ornament" aria-hidden="true"></div>
            <AppLink className="homelink linkWarrow self-end" to="/shop">{t("homeShop.button")}</AppLink>
          </div>
        </div>
        <div className={`${grids.shop}`}>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="ornament" aria-hidden="true"></div>
    </section>
  );
};

export default ShopPreview;