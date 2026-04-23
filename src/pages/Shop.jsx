import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getProducts } from "../services/api";
import HeroSection from "../components/sections/HeroSection";
import Filter from "../components/Filter";
import ProductCard from "../components/sections/ProductCard";
import { grids, spacing } from "../styles/global";

const Shop = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const filtered = products
    .filter(p => {
      const matchSearch = p.title?.[lang]
        ?.toLowerCase()
        .includes(search.toLowerCase());
    const productCat = p.category?.en || p.category;
    const matchCategory = category === "all" || productCat === category;
    return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc")  return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <main>
      <HeroSection />
      <div className={`shop ${spacing.mtMain}`}>

        <Filter
          products={products}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className={`${spacing.mtMain} ${grids.shop}`}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;