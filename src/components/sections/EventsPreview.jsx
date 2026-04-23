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
            <h2>{t("homeEvents.title")}</h2>
            <p className="whitespace-pre-line">{t("homeEvents.description")}</p>
            <AppLink className="homelink flex flex-row gap-4 self-end mt-10" img={ arrow } to="/events">{t("homeEvents.button")}</AppLink>
          </div>
        </div>
    </section>
  );
}

export default EventsPreview