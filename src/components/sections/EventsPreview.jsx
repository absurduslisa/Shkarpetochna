import { useTranslation } from 'react-i18next';
import { AppLink } from '../ui/AppLink';
import photo3 from '../../assets/photos/event3.JPG';

// Styles
import { grids, images } from '../../styles/global';

function EventsPreview() {
  const {t} = useTranslation();
  return (
    <section>
        <div className={`section ${grids.flexi}`}>
          <div>
            <h2>{t("homeEvents.title")}</h2>
            <p className="whitespace-pre-line">{t("homeEvents.description")}</p>
            <AppLink to="/events">{t("homeEvents.button")}</AppLink>
          </div>
          <img className={images.half} src={photo3} alt="Two girls in ukrainian outfits" />
        </div>
    </section>
  );
}

export default EventsPreview