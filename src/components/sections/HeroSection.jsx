import { useTranslation } from 'react-i18next';
import photo from '../../assets/photos/hero2.png'

const HeroSection = ({imagesrc, title, alttext, desc, desc2=null, sub=null}) => {
  const {t} = useTranslation();

  return (
    <section className='hero bg-red-800 '>
      <div className='section text-center'>
        {/* <img src={photo} alt={alttext} /> */}
        <h1 className='text-orange-100'>{title ? title : t("homeHero.title")}</h1>
        <p className='text-orange-100 py-8'>{desc ? desc : t("homeHero.description")}</p>
        {desc2 && (<p className="text-orange-100 py-8">{desc2}</p>)}
        {sub && (<p className="text-orange-100 py-8">{sub}</p>)}
        </div>
    </section>
  )
}

export default HeroSection