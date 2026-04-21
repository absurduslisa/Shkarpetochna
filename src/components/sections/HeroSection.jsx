import { useTranslation } from 'react-i18next';

const HeroSection = ({imagesrc, title, alttext, paragraph}) => {
  const {t} = useTranslation();

  return (
    <section>
      <div className='section h-64 bg-red-800'>
        {/* <img src={imagesrc} alt={alttext} /> */}
        <h1 className='text-orange-100'>{title}</h1>
        <p className='text-orange-100'>{paragraph}</p>
      </div>
    </section>
  )
}

export default HeroSection