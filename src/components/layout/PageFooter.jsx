import { useTranslation } from "react-i18next";
import { AppLink } from '../ui/AppLink';


// Styles
import { images } from "../../styles/global";

const PageFooter = () => {
  const { t } = useTranslation();

  return (
    <nav id="footer" aria-label="footer navigation">
      <div>
        <div className={`flex flex-col text-center md:flex-row md:justify-between md:items-center gap-2 py-4 pb-10`}>
          <AppLink to="/" className="text-red-700 font-bold font-podkova text-3xl">{t("homeHero.title")}</AppLink>

          <div id="navi" className="flex flex-col gap-2">
              <AppLink to="/shop">{t("footer.shop")}</AppLink>
              <AppLink to="/events">{t("footer.events")}</AppLink>
              <AppLink to="/about">{t("footer.about")}</AppLink>
            </div>
            <div className="flex flex-col gap-2">
              <AppLink to="/events#next">{t("footer.next")}</AppLink>
              <AppLink to="/events#arch">{t("footer.arch")}</AppLink>
          </div>

          <div className="flex flex-col gap-2">
              <AppLink to="/cart">{t("footer.cart")}</AppLink>
              <AppLink to="/auth">{t("footer.account")}</AppLink>
          </div>
        </div>

        <p className="text-xs text-center ">{t("footer.disclamer")}</p>

      </div>
    </nav>
  )
}

export default PageFooter