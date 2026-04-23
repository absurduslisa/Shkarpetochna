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
    <section className="border-none">
      <div className={`section ${grids.flexi}`}>
        <div>
          <h2>{t("homeAbout.title")}</h2>
          <p className="whitespace-pre-line">{t("homeAbout.description")}</p>
          <AppLink className=" homelink flex flex-row gap-4 self-end mt-10" img={arrow} to="/about">{t("homeAbout.button")}</AppLink>
        </div>
        <img className={images.half} src={photo} alt="Granny with socks"/>
      </div>
    </section>
  );
}

export default AboutPreview