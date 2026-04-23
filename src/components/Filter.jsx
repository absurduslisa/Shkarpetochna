import { useTranslation } from "react-i18next";
import { actions, borders } from "../styles/global";

const Filter = ({
  products = [],
  search, setSearch,
  category, setCategory,
  sortBy, setSortBy
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const categories = [
    ...new Set(
      products.map(p => p.category?.en || p.category)
    )
  ].filter(Boolean);

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={t("shop.search")}
        className={`${actions.focus} ${actions.hover} ${borders.border_button} px-3 py-2 flex-1`}
      />

      <select className={`${actions.focus} ${actions.hover} ${borders.border_button} px-3 py-2 flex-1`} value={category} onChange={e => setCategory(e.target.value)}>
        <option value="all">{t("shop.allCategories")}</option>
        {categories.map(cat => {
          const match = products.find(p =>
            (p.category?.en || p.category) === cat
          );
          const label = match?.category?.[lang] || cat;

          return (
            <option key={cat} value={cat}>
              {label}
            </option>
          );
        })}
      </select>

      <select className={`${actions.focus} ${actions.hover} ${borders.border_button} px-3 py-2 flex-1`} value={sortBy} onChange={e => setSortBy(e.target.value)}>
        <option value="default">{t("shop.sortDefault")}</option>
        <option value="price-asc">{t("shop.sortPriceAsc")}</option>
        <option value="price-desc">{t("shop.sortPriceDesc")}</option>
      </select>
    </div>
  );
};

export default Filter;