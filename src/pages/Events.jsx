import { useTranslation } from 'react-i18next';

import HeroSection from '../components/sections/HeroSection';

// Photos
import photo from '../assets/photos/event1.JPG';
import photo2 from '../assets/photos/event2.JPG';
import photo3 from '../assets/photos/event3.JPG';
import photo4 from '../assets/photos/event4.JPG';
import photo5 from '../assets/photos/event5.JPG';
import photo6 from '../assets/photos/event6.JPG';
import photo7 from '../assets/photos/event7.JPG';
import photo8 from '../assets/photos/arch.JPG';
import photo9 from '../assets/photos/arch2.JPG';

// Styles
import { grids, images } from '../styles/global';

const Events = () => {
  const {t} = useTranslation();

  return (
    <main>
      <HeroSection />
      <section>
        <div>
          <div className={grids.flexi}>
            <div>
              <h2>{t("events.title")}</h2>
              <p>{t("events.description")}</p>
            </div>
            <img className={images.half} src={photo3} alt="Two girls in ukrainian outfits" />
          </div>
          <div className={grids.events}>
            <img src={photo2} alt="A company of girls in ukrainian outfits" />
            <img src={photo4} alt="The mother of socks in ukrainian wreath with a huge deco wreath" />
            <img src={photo5} alt="Ukrainian summer market with a huge amount of ukrainian goods" />
            <img src={photo7} alt="Girls in ukrainian outfits" />
          </div>


        </div>
      </section>

      <section>
        <div className={grids.flexi}>
          <img className={images.half} src={photo6} alt="Close up of the markets goods" />
          <div>
            <h2>{t("eventNext.title")}</h2>
            <p>{t("eventNext.description")}</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className={grids.flexi}>
            <div>
              <h2>{t("archievments.title")}</h2>
              <p>{t("archievments.description")}</p>
            </div>
            <img className={images.half} src={photo} alt="Ukrainian flag with signature of the ukrainian soldiers at our market stand" />
          </div>
          <div className={grids.flexi}>
            <img className={images.half} src={photo8} alt="Newsletter article about our community" />
            <img className={images.half} src={photo9} alt="Online article about our market" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Events