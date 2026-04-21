import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import { images } from "../../styles/global";

const ProductCard = ({ product, lang }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/product/${product.id}`}>
        <article key={product.id} className="h-full p-4 border hover:bg-orange-400/10">
            <img src={product.photo} alt={product.title?.[lang] || product.title} className={images.shop} />
            <div className="flex flex-col justify-between">
                <div>
                    <h3>{product.title?.[lang] || product.title}</h3>
                    <p>{product.description?.[lang] || product.description}</p>
                    <p>{product.price} €</p>
                    <p>{product.stock === true ? "In stock 🧦" : "Sold out 😢"}</p>
                </div>
                <Button>{t("buttons.addToCart")}</Button>
            </div>
        </article>
    </Link>

  );
};

export default ProductCard;