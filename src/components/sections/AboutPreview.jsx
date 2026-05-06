import { useTranslation } from "react-i18next";
import { AppLink } from '../ui/AppLink';

// Img
import photo from "../../assets/photos/us.jpg"
import arrow from "../../assets/icons/arrow2.png"

// Styles
import { grids, images } from '../../styles/global';

function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section>
      <div className={`section ${grids.flexi}`}>
        <div>
          <AppLink to="/about">
            <h2>{t("homeAbout.title")}</h2>
          </AppLink>

          <p className="whitespace-pre-line">{t("homeAbout.description")}</p>
          <AppLink className="homelink linkWarrow mt-10" to="/about">{t("homeAbout.button")}</AppLink>
        </div>
        <img className={images.half} src={photo} alt="Granny with socks"/>
      </div>
      <div className="ornament" aria-hidden="true"></div>
    </section>
  );
}

export default AboutPreview