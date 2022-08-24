import Image from 'next/future/image'
import Link from 'next/link';


const HomeHero = () => {
  return (
    <header className="relative bg-slate-800 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-12 gap-6">
        <div className="flex flex-col w-full aspect-square justify-center items-start">
          <p className="text-slate-100 text-sm md:text-md font-brand mt-8">
            Taste the difference!
          </p>
          <h1 className="font-brand text-yellow-200 text-3xl md:text-5xl mb-3">
            Black Impala <br />
            Tshisanyama & <br />
            Restaurant
          </h1>

          <p className="text-slate-300 text-sm md:text-lg max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa
            quasi in fugiat obcaecati reiciendis facere dignissimos? Nesciunt ex
            harum tenetur perferendis non cum perspiciatis!
          </p>

          <Link href="/menu">
            <a className="bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-slate-800 text-lg font-brand font-bold mt-4 px-8 py-2">
              Explore Menu
            </a>
          </Link>
        </div>

        <div className="w-full relative isolate p-8">

              <Image
                src="/images/porkchop.jpg"
                alt="Pork"
                width={1500}
                height={1500}
                className="w-full z-40 aspect-square"
              />

        </div>
      </div>
    </header>
  );
};
export default HomeHero;
