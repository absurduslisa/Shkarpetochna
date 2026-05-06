import { useTranslation } from 'react-i18next';
import photo from '../../assets/photos/hero2.png'

const HeroSection = ({imagesrc, title, alttext, desc, desc2=null, sub=null}) => {
  const {t} = useTranslation();

  return (
    <section className='hero bg-red-800 text-center'>
      <div className='py-10'>
        <div className="ornament my-10" aria-hidden="true"></div>
        <h1 className='text-orange-100 pb-4'>{title ? title : t("homeHero.title")}</h1>
        <p className='text-orange-100 py-4'>{desc ? desc : t("homeHero.description")}</p>
        {desc2 && (<p className="text-orange-100 py-4">{desc2}</p>)}
        {sub && (<p className="text-orange-100 py-4">{sub}</p>)}
        <div className="ornament my-10" aria-hidden="true"></div>

      </div>
    </section>
  )
}

export default HeroSection