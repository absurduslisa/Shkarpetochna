import { useTranslation } from 'react-i18next';

import HeroSection from '../components/sections/HeroSection';

// Photos
import photo from '../assets/photos/us.jpg';
import photo2 from '../assets/photos/us2.jpg';
import photo3 from '../assets/photos/us3.jpg';
import photo4 from '../assets/photos/us4.jpg';
import photo5 from '../assets/photos/us5.jpg';

// Styles
import { grids, images, spacing } from '../styles/global';
function AboutPage() {
  const {t} = useTranslation();

  return (
<main>
      <HeroSection />
      <section id="about">
        <div className={`section ${grids.galery}`}>
          <div>
            <div>
              <h2>{t("about.title")}</h2>
              <p>{t("about.description")}</p>
            </div>
            <img className={spacing.mtMain} src={photo2} alt="A lot of socks" />
            <img className={spacing.mt} src={photo4} alt="A lot of hand made hearts" />
          </div>
          <div>
            <img className={spacing.mt} src={photo} alt="Granny sits with a lot of socks" />
            <img className={spacing.mt} src={photo3} alt="A lot of socks" />
            {/* <img className={spacing.mt} src={photo5} alt="A lot of socks" /> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage