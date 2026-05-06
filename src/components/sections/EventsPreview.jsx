import { useTranslation } from 'react-i18next';
import { AppLink } from '../ui/AppLink';

// Img
import photo3 from '../../assets/photos/event3.jpg';
import arrow from "../../assets/icons/arrow2.png"

// Styles
import { grids, images } from '../../styles/global';

function EventsPreview() {
  const {t} = useTranslation();
  return (
    <section>
        <div className={`section ${grids.flexi}`}>
          <img className={images.half} src={photo3} alt="Two girls in ukrainian outfits" />
          <div>
            <AppLink to="/events">
              <h2>{t("homeEvents.title")}</h2>
            </AppLink>

            <p className="whitespace-pre-line">{t("homeEvents.description")}</p>
            <AppLink className="homelink linkWarrow mt-10" to="/events">{t("homeEvents.button")}</AppLink>
          </div>
        </div>
        <div className="ornament" aria-hidden="true"></div>
    </section>
  );
}

export default EventsPreview