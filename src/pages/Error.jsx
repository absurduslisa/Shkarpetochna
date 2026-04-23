import { useTranslation } from "react-i18next";

const Error = () => {
  const {t} = useTranslation();

  return (
    <section className=" border-0">
        <div className="section text-center"><h2>{t("error")}</h2></div>
    </section>
  )
}

export default Error