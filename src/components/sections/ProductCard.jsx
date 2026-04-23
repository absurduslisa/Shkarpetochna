import { Link } from "react-router-dom";
import AddToCartButton from "../ui/AddToCartButton";
import { actions, images } from "../../styles/global";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <article key={product.id} className="h-full flex flex-col p-4 border-2 hover:bg-orange-400/10">
      <Link className={`${actions.focus} mb-4`} to={`/product/${product.id}`}>
        <img src={product.photo} alt={product.title?.[lang] || product.title} className={images.shop} />
        <div className="flex flex-col flex-1">
          <div>
            <h3 className={`${actions.hover}`}>{product.title?.[lang] || product.title}</h3>
            <p>{product.description?.[lang] || product.description}</p>
            <p className="category mt-4">{product.category?.[lang] || product.category }</p>
            <p>{product.price} &euro;</p>
          </div>
        </div>
      </Link>
      <AddToCartButton className="mt-auto" product={product} />
    </article>
  );
};

export default ProductCard;