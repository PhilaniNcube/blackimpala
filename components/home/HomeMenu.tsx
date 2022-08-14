import Image from "next/future/image";
import Link from "next/link";

const HomeMenu = () => {
  return (
    <section>
      <div className="max-w-7xl py-16 mx-auto px-4 relative">
        <div className="grid grid-cols-5 px-8 gap-4">
          <div className="col-span-5 md:col-span-3 py-12 md:py-16">
            <h2 className="text-gray-700 font-light uppercase text-5xl">
              Black Impala Restaurant
            </h2>
            <div className="grid md:grid-cols-2  gap-3 mt-6 text-gray-700 font-medium">
              <p>
                The Black Impala Restaurant is located at the Port Elizabeth
                Harbour. Come dine with us looking over the waters of the Port
                of Ngqurha. Enjoy good music while our staff prepare you meal.{" "}
              </p>
              <p>
                We have a wide selection of drinks available. Local Craft Beers,
                a wide wine selection and your pick of liqour from famous brands
                from all over the world.
              </p>
            </div>
            <Link href="/contact">
              <button className="bg-slate-800 px-8 py-2 text-white uppercase font-medium tracking-wide rounded mt-4">
                Book a table
              </button>
            </Link>{" "}
            <div className=" hidden md:grid grid-cols-3 mt-4 gap-3">
              <Image
                src="/images/beer.jpg"
                alt="bbq"
                className="w-full aspect-square object-cover"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/pasta.jpg"
                alt="pasta"
                className="w-full aspect-square object-cover"
                width={1000}
                height={1000}
              />
              <Image
                src="/images/cocktail.jpg"
                alt="cocktail"
                className="w-full aspect-square object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-2">
            <Image
              src="/images/brandy.jpg"
              alt="brandy"
              className="w-full object-cover"
              width={1000}
              height={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeMenu;
