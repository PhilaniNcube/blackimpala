import HomeMenu from "./(home)/home-menu";
import HomePageHero from "./(home)/home-page-hero";
import HomePageImageGrid from "./(home)/home-page-image-grid";
import HomeWeeklyEvents from "./(home)/home-weekly-events";
import RestaurantDisplay from "./(home)/restaurant-display";


export default async function Index() {


  return (
    <div>
       <HomePageHero />
       <RestaurantDisplay />
       <HomeMenu />
       <HomePageImageGrid />
       <HomeWeeklyEvents />
    </div>
  );
}
