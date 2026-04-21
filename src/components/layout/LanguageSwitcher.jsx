import { useTranslation } from 'react-i18next';
import { actions } from "../../styles/global";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button className={actions.action} onClick={() => i18n.changeLanguage("ua")}>UA</button>
      <span>/</span>
      <button className={actions.action} onClick={() => i18n.changeLanguage("en")}>EN</button>
    </div>
  );
};

export default LanguageSwitcher