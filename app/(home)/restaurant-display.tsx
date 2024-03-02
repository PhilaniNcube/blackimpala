import Image from "next/image";

const RestaurantDisplay = () => {
  return <section className="py-16">
    <div className="container px-8 lg:px-0">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 md:gap-12">
        <div className="w-full">
          <h2 className="text-3xl font-bold">Black Imapala Restaurant @The Harbour</h2>
          <p className="mt-4 text-md md:text-lg">
            Black Impala is a restaurant located at the Harbour in Gqeberha. On offer is a variety of meals, from seafood to steaks, and a selection of wines and craft beers. The restaurant is open 7 days a week, from 11am to 10pm. In attendance is a rotation of local musicians and DJs, providing a great atmosphere for patrons.
          </p>
          <div className="mt-4">
            <Image src="/images/harbour_wine.jpg" width={720} height={480} alt="Wine" className="object-cover w-full aspect-video" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-3xl font-bold">Black Imapala Tshisanyama @Deal Party</h2>
          <p className="mt-4 text-md md:text-lg">
            The Deal Party location is great for those patrons looking for an upbeat vibe. The Tshisanyama is open from 11am to 10pm, 7 days a week. The menu features your selection of choice cuts of meat to be grilled for you. Enjoy a meal with friends and family, and it is also a great place to meet new people.
          </p>
          <div className="mt-4">
            <Image src="/images/decks.jpg" width={960} height={640} alt="Wine" className="object-cover w-full aspect-video" />
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default RestaurantDisplay;
