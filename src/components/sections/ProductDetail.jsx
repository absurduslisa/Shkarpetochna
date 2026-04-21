import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProduct } from "../../services/api";
import Button from "../ui/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then((data) => {
      console.log("PRODUCT:", data); // 👈 перевір
      setProduct(data);
    });
  }, [id]);
  console.log(lang)

  if (!product) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <img src={product.photo} className="w-full max-w-md" />
      <h1>{product.title?.[lang]}</h1>
      <p>{product.description?.[lang]}</p>
      <p>{product.price} €</p>
      <p> {product.stock ? "In stock 🧦" : "Sold out 😢"}</p>
      <Button> {t("buttons.addToCart")} </Button>
    </main>
  );
};

export default ProductDetail;