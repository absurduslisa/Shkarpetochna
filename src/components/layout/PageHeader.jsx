import { useTranslation } from "react-i18next";
import { useCart } from "../../context/CartContext";
import { AppLink } from '../ui/AppLink';
import LanguageSwitcher from './LanguageSwitcher';

// Logos
import logo from '../../assets/logo2.png'
import cart from '../../assets/icons/shopping-cart.svg';
import account from '../../assets/icons/account.png'

// Styles
import { images } from "../../styles/global";

const PageHeader = () => {
  const { t } = useTranslation();
  const { totalItems } = useCart();

  return (
    <nav id="header" aria-label="main navigation">
      <div className={`flex justify-between items-center`}>
        <AppLink to="/"><img className="h-12 w-auto" src={logo} alt="Logo" /></AppLink>

        <div id="navi" className="hidden md:flex-end md:flex gap-8">
            <AppLink to="/shop">{t("header.shop")}</AppLink>
            <AppLink to="/events#events">{t("header.events")}</AppLink>
            <AppLink to="/events#next">{t("header.next")}</AppLink>
            <AppLink to="/events#arch">{t("header.arch")}</AppLink>
            <AppLink to="/about#about">{t("header.about")}</AppLink>
        </div>

        <div className="flex flex-row items-center">
            <AppLink className="flex flex-row" to="/cart"><img className={`px-2 ${images.icons}`} src={cart} alt="cart icon" />
              {totalItems > 0 && (
                <span className="bg-orange-400 text-white rounded-full px-1 w-4 text-center h-4 text-xs justify-self-end -ml-3">
                  {totalItems}
                </span>
              )}
            </AppLink>
            <AppLink to="/account"><img className={`px-2 ${images.icons}`} src={account} alt="accoint icon" /></AppLink>
            <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default PageHeader