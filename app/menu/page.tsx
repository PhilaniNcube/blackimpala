import { getCategories } from "@/lib/fetchers/categories";
import MenuHeader from "../(menu)/menu-header";
import MenuSection from "../(menu)/menu-section";
import MenuImages from "../(menu)/menu-images";

const MenuPage = async () => {

  const { categories, error } = await getCategories();

  return <div>
    <MenuHeader />
    <MenuImages />
    {error ? <div>{error}</div> : categories === null ? <div>Loading...</div> : categories.map((category) => <MenuSection key={category.id} category={category} />)}
  </div>;
};
export default MenuPage;
