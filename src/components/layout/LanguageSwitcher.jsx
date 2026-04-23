import { useTranslation } from 'react-i18next';
import { actions } from "../../styles/global";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button className={`px-0.5 ${actions.focus} ${actions.hover}`} onClick={() => i18n.changeLanguage("ua")}>UA</button>
      <span className='text-xs px-0.5'>/</span>
      <button className={`px-0.5 ${actions.focus} ${actions.hover}`} onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
};

export default LanguageSwitcher