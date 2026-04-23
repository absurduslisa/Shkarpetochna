import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import { actions, buttons, images } from "../styles/global";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { cart, removeFromCart } = useCart();

  return (
    <section className="border-none">
      <div className="section mb-10">
        <h2>
          <Trans
            i18nKey="cart.title"
            components={{ del: <del className="text-red-300" /> }}
            />
        </h2>
        <p className="text-2xl mb-6">{
          cart.length === 0?
          t("cart.empty") :
          t("cart.amount", { quantity: cart.length })
        }
        </p>
        {cart.map(product => (
          <div
          className="grid grid-cols-[1fr_2fr_1fr_auto] gap-4 items-center border-b-2 border-gray-600 py-3"
          key={product.id}>
            <img className={` ${images.shop} w-20`} src={product.photo} alt="" />
            <Link className={`${actions.focus}`} to={`/product/${product.id}`}>
              <h3 className={`${actions.hover}`}>{product.title?.[lang] || product.title}</h3>
              <p>{product.description?.[lang] || product.description}</p>
            </Link>
            <div>
              <p className="category">{product.category?.[lang] || product.category}</p>
              <p>{product.price} &euro;</p>
            </div>
            <Button className={`group ${actions.focus} ${actions.hover} ${buttons.add} w-60`} onClick={() => removeFromCart(product.id)}>
              <>
                <span className="group-hover:hidden">
                  {t("buttons.remove")}
                </span>
                <span className="hidden group-hover:inline">
                  {t("buttons.removeHover")}
                </span>
              </>
            </Button>
          </div>
        ))}
        <Button className={`group ${actions.focus} ${actions.hover} ${buttons.add} w-60 mt-8 justify-self-end`}>
            <>
              <span className="group-hover:hidden">
                {t("buttons.buy")}
              </span>
              <span className="hidden group-hover:inline">
                {t("buttons.buyHover")}
              </span>
            </>
          </Button>
      </div>
    </section>
  );
};

export default Cart