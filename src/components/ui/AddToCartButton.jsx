import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { actions, buttons } from "../../styles/global";
import Button from "./Button";

const AddToCartButton = ({ product, className }) => {
  const { t } = useTranslation();
  const { cart, addToCart, removeFromCart } = useCart();

  const isInStock = product.stock === true;
  const isInCart = cart.some(i => i.id === product.id);

  // styles
  const classIntern = !isInStock
    ? buttons.sold
    : isInCart
      ? buttons.added
      : actions.hover && buttons.add; // to add

  // text
  const label = !isInStock
    ? t("buttons.soldOut")
    : isInCart
      ? (
        <>
          <span className="group-hover:hidden">
            {t("buttons.added")}
          </span>
          <span className="hidden group-hover:inline">
            {t("buttons.remove")}
          </span>
        </>
      )
      : (
        <>
          <span className="group-hover:hidden">
            {t("buttons.addToCart")}
          </span>
          <span className="hidden group-hover:inline">
            {t("buttons.addToCartHover")}
          </span>
        </>
      );

  return (
    <Button
      onClick={() => !isInCart ? addToCart(product) : removeFromCart(product.id)}
     disabled={!isInStock}
      className={`group ${classIntern} ${className} `}

      aria-label={
        !isInStock
          ? t("buttons.soldOut")
          : isInCart
            ? t("buttons.remove")
            : t("buttons.addToCart")
      }
      aria-pressed={isInCart}
    >
      {label}
    </Button>
  );
};

export default AddToCartButton;