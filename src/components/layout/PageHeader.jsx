import { useTranslation } from "react-i18next";

import logo from '../../assets/logo.webp'
import { CartProvider } from "../../context/CartContext";
import { AppLink } from '../ui/AppLink';
import LanguageSwitcher from './LanguageSwitcher';



const PageHeader = () => {
  const { t } = useTranslation();

  return (
    <CartProvider>
      <nav id="header">
        <div className={`flex justify-between`}>
          <AppLink to="/"><img className="h-12 w-auto" src={logo} alt="Logo" /></AppLink>

          <nav id="navi" className="flex-end flex gap-6">
              <AppLink to="/shop">{t("header.shop")}</AppLink>
              <AppLink to="/events">{t("header.events")}</AppLink>
              <AppLink to="/about">{t("header.about")}</AppLink>
          </nav>

          <nav>
              <AppLink to="/cart"><button className='pe-4'>Cart</button></AppLink>
              <AppLink to="/auth"><button className=''>Account</button></AppLink>
              <LanguageSwitcher />
          </nav>
        </div>
      </nav>
    </CartProvider>
  )
}

export default PageHeader