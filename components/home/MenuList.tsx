import { useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import Link from "next/link";
import { getBeers } from "../../fetchers/getProducts";
import { Product } from "../../types";

const MenuList = ({platters}: {platters: Product[]}) => {


  const beersQuery = useQuery(['beers'], getBeers, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold font-brand text-center text-yellow-400">
          Quick Menu
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full flex flex-col">
          <h3 className="text-4xl mb-3 text-yellow-400 font-brand text-center">
            Platters
          </h3>
          {platters.map((item) => (
            <Link key={item.id} href={`/menu/platters/${item.id}`}>
              <div className="flex cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                <p className="text-lg text-slate-100 font-brand">{item.name}</p>
                <span className="border-b border-dotted border-white w-full"></span>
                <p className="text-2xl text-slate-50">R{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full hidden md:flex">
          <Image
            src="/images/wings.jpg"
            alt="wings"
            className="w-full h-full object-cover rounded"
            width={721}
            height={1000}
          />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-4xl mb-3 text-yellow-400 font-brand text-center">
            Beers
          </h3>
          {beersQuery.data?.map((item) => (
            <Link key={item.id} href={`/menu/beer/${item.id}`}>
              <div className="flex cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                <p className="text-lg text-slate-100 font-brand">{item.name}</p>
                <span className="border-b border-dotted border-white w-full"></span>
                <p className="text-2xl text-slate-50">R{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>{" "}
      <div className="max-w-7xl mx-auto flex justify-center py-8 px-4">
        <Link href="/menu">
        <a className="text-center font-extrabold text-slate-800 px-8 py-2 bg-yellow-400">
         View More
        </a>
        </Link>
      </div>
    </section>
  );
};
export default MenuList;
