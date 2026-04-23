import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProduct } from "../../services/api";
import AddToCartButton from "../ui/AddToCartButton";

// Styles
import { grids, images } from '../../styles/global';

const ProductDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section>
      <div className={`max-w-6xl mx-auto p-6 ${grids.flexi}`}>
        <img className={images.half} src={product.photo} alt={product.title?.[lang] ?? product.title?.en ?? ""} />
        <div>
          <h1 className="text-left py-10 break-normal">{product.title?.[lang] ?? product.title?.en ?? product.title}</h1>
          <p>{product.description?.[lang] ?? product.description?.en ?? product.description}</p>
          <p className="category">{product.category?.[lang] ?? product.category?.en ?? product.category}</p>
          <p>{product.price} &euro;</p>
          <p>{product.stock ? "In stock 🧦" : "Sold out 😢"}</p>
          <AddToCartButton className="mt-6" product={product} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;