import { useTranslation } from "react-i18next";

// Components
import HeroSection from '../components/sections/HeroSection';
import ShopPreview from '../components/sections/ShopPreview';
import EventsPreview from '../components/sections/EventsPreview';
import AboutPreview from '../components/sections/AboutPreview';

export const App = () => {
  const { t } = useTranslation();

  return (
    <main>
      <HeroSection title={t("homeHero.title")} paragraph={t("homeHero.description")}/>
      <ShopPreview />
      <EventsPreview />
      <AboutPreview />
    </main>

  )
}

export default App