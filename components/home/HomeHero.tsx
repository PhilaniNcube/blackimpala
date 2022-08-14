import Image from 'next/future/image'
import Link from 'next/link';


const HomeHero = () => {
  return (
    <header className="relative h-[95vh]">
      <div className="absolute inste-0 h-full w-full z-30 bg-gray-600/40">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start min-h-[60vh]">
          <p className="text-sm text-white uppercase tracking-wide">
            Tshisanyama | Restaurant
          </p>
          <h1 className="text-3xl md:text-6xl font-extrabold text-gray-50">
            Music, Meat & Vibes
          </h1>
          <p className="text-xl md:text-2xl font-medium w-[30ch] mt-3 text-white">
            Nothings beats good vibes, great company and good food
          </p>

          <Link href="#menu">
            <button className="bg-white text-gray-800 mt-4 rounded-lg font-medium uppercase px-8 py-2">
              Menu
            </button>
          </Link>
        </div>
      </div>
      <Image
        src="/images/steak.jpg"
        alt="background"
        width={2000}
        height={1125}
        className="w-full h-full object-cover"
      />
    </header>
  );
};
export default HomeHero;
