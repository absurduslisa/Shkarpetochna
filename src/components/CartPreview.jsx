import { useTranslation } from "react-i18next";
import { borders, screens } from '../styles/global'
import Button from './ui/Button'



const CartPreview = () => {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-between ${borders.border_bottom} ${screens.wide}`}>
      <p></p>
        {/* <Button children={t("cart.title")} /> */}
    </div>
  )
}

export default CartPreview