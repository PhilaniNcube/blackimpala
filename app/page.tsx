import HomeMenu from "./(home)/home-menu";
import HomePageHero from "./(home)/home-page-hero";
import RestaurantDisplay from "./(home)/restaurant-display";


export default async function Index() {


  return (
    <div>
       <HomePageHero />
       <RestaurantDisplay />
       <HomeMenu />
    </div>
  );
}
