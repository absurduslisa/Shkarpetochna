import { useTranslation } from 'react-i18next';

import HeroSection from '../components/sections/HeroSection';

// Photos
import photo from '../assets/photos/event1.jpg';
import photo2 from '../assets/photos/event2.jpg';
import photo3 from '../assets/photos/event3.jpg';
import photo4 from '../assets/photos/event4.jpg';
import photo5 from '../assets/photos/event5.jpg';
import photo6 from '../assets/photos/event6.jpg';
import photo7 from '../assets/photos/event7.jpg';
import photo8 from '../assets/photos/arch.jpg';
import photo9 from '../assets/photos/arch2.jpg';

// Styles
import { grids, images, spacing } from '../styles/global';

const Events = () => {
  const {t} = useTranslation();

  return (
    <main>
      <HeroSection />
      <section id="events">
        <div className={`section ${grids.galery}`}>
          <div>
            <div>
              <h2>{t("events.title")}</h2>
              <p>{t("events.description")}</p>
            </div>
            <img className={spacing.mtMain} src={photo5} alt="Ukrainian summer market with a huge amount of ukrainian goods" />
            <img className={spacing.mt} src={photo7} alt="Girls in ukrainian outfits" />
          </div>
          <div>
            <img className={spacing.mt} src={photo3} alt="Two girls in ukrainian outfits" />
            <img className={spacing.mt} src={photo2} alt="A company of girls in ukrainian outfits" />
            <img className={spacing.mt} src={photo4} alt="The mother of socks in ukrainian wreath with a huge deco wreath" />
          </div>
        </div>
      </section>

      <section id="next">
        <div className={`${grids.flexi} section`}>
          <img className={images.half} src={photo6} alt="Close up of the markets goods" />
          <div>
            <h2>{t("eventNext.title")}</h2>
            <p>{t("eventNext.description")}</p>
          </div>
        </div>
      </section>

      <section id='arch'>
        <div className={`section ${grids.galery}`}>
          <div>
            <div>
              <h2>{t("archievments.title")}</h2>
              <p>{t("archievments.description")}</p>
            </div>
            <img className={spacing.mtMain} src={photo} alt="Ukrainian flag with signature of the ukrainian soldiers at our market stand" />
          </div>
          <div>
            <img className={spacing.mt} src={photo8} alt="Newsletter article about our community" />
            <img className={spacing.mt} src={photo9} alt="Online article about our market" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Events