import { useTranslation } from "react-i18next";

import { AppLink } from '../ui/AppLink';


function AboutPreview() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="section">
        <h2>{t("homeAbout.title")}</h2>
        <p className="whitespace-pre-line">{t("homeAbout.description")}</p>
        <AppLink to="/about">{t("homeAbout.button")}</AppLink>
      </div>
    </section>
  );
}

export default AboutPreview