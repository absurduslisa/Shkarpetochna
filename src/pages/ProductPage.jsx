import HeroSection from '../components/sections/HeroSection';
import ProductDetail from '../components/sections/ProductDetail';
import ProductsRecommend from '../components/sections/ProductsRecommend'


export const App = () => {
  return (
    <main className='bg-orange-100'>
      <ProductDetail />
      {/* <CartPreview /> */}
      <ProductsRecommend />
    </main>
  )
}

export default App