import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import { actions, buttons, images } from "../styles/global";
import { AppLink } from "../components/ui/AppLink";

const Cart = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const { cart, removeFromCart, totalItems } = useCart();

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
          totalItems === 0?
          t("cart.empty") :
          t("cart.amount", { quantity: totalItems })
        }
        </p>
        {cart.map(product => (
          <div
          className="flex flex-col sm:grid grid-cols-[1fr_2fr_1fr_auto] gap-4 items-center border-b-2 border-gray-600 py-3"
          key={product.id}>
            <img className={`${images.shop} max-w-30 sm:w-20`} src={product.photo} alt="" />
            <Link className={`${actions.focus}`} to={`/product/${product.id}`}>
              <h3 className={`${actions.hover} text-center sm:text-left`}>{product.title?.[lang] || product.title}</h3>
              <p className=" text-center sm:text-left">{product.description?.[lang] || product.description}</p>
            </Link>
            <div className="flex flex-row sm:block gap-6 ">
              <p className="category">{product.category?.[lang] || product.category}</p>
              <p>{product.price} &euro;</p>
            </div>
            <Button className={`group ${actions.focus} ${actions.hover} ${buttons.add} w-50 md:w-60 mb-4 sm:mb-0`} onClick={() => removeFromCart(product.id)}>
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
        <div className="flex justify-center sm:justify-end mt-8">
          <Button className={`group ${actions.focus} ${actions.hover} ${buttons.add} w-60 mt-8 `}> {
            totalItems === 0?
            <>
              <AppLink to="/shop">
                <span className="group-hover:hidden">
                  {t("buttons.toShop")}
                </span>
                <span className="hidden group-hover:inline">
                  {t("buttons.toShopHover")}
                </span>
              </AppLink>
            </>
            :
            <>
                <span className="group-hover:hidden">
                  {t("buttons.buy")}
                </span>
                <span className="hidden group-hover:inline">
                  {t("buttons.buyHover")}
                </span>
              </>
          }
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Cart