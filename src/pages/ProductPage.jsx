import HeroSection from '../components/sections/HeroSection';
import ProductDetail from '../components/sections/ProductDetail';
import ProductsRecommend from '../components/sections/ProductsRecommend'

const ProductPage = () => {
  return (
    <main>
      <ProductDetail />
      <ProductsRecommend />
    </main>
  );
};

export default ProductPage;