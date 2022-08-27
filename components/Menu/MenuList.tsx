import { useQuery } from "@tanstack/react-query";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import { getBeers, getLightMeals, getPlatters, getSalad, getStews } from "../../fetchers/getProducts";

const MenuList = () => {


  const {data: platters, isLoading:plattersLoading, isSuccess:plattersSucces} = useQuery(['platters'], getPlatters, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })


  const {data: beers, isLoading:beersLoading, isSuccess:beersSucces} = useQuery(['beers'], getBeers, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })


  const {data: salads, isLoading:saladsLoading, isSuccess:saladsSucces} = useQuery(['salads'], getSalad, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })


  const {data: stews, isLoading:stewsLoading, isSuccess:stewsSucces} = useQuery(['stews'], getStews, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })


  const {data: meals, isLoading:mealsLoading, isSuccess:mealsSucces} = useQuery(['meals'], getLightMeals, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })



  return (
    <section className="bg-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <Image
          src="/images/ribs.jpg"
          alt="ribs"
          width={1500}
          height={1000}
          className="w-full h-32 md:h-44 object-cover my-3"
        />
        <h2 className="text-center mb-2 text-yellow-400 text-3xl md:text-4xl font-brand font-bold">
          Platters
        </h2>
        <div className="grid gird-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platters?.map((item) => (
            <Link key={item.id} href={`/menu/platters/${item.id}`}>
              <Fragment>
                <div className="cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                  <div className="flex ">
                    <p className="text-lg text-slate-100 font-brand flex-2">
                      {item.name}
                    </p>
                    <span className="border-b border-dotted border-white flex-1"></span>
                    <p className="text-2xl text-slate-50">R{item.price}</p>
                  </div>{" "}
                  <div className="pr-2">
                    <p className="text-slate-200 mt-2 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            </Link>
          ))}
        </div>
        <Image
          src="/images/beers.jpg"
          alt="beers"
          width={1500}
          height={1000}
          className="w-full h-32 md:h-44 object-cover my-3"
        />
        <h2 className="text-center mt-8 mb-2 text-yellow-400 text-3xl md:text-4xl font-brand font-bold">
          Beers
        </h2>
        <div className="grid gird-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {beers?.map((item) => (
            <Link key={item.id} href={`/menu/beers/${item.id}`}>
              <Fragment>
                <div className="cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                  <div className="flex ">
                    <p className="text-lg text-slate-100 font-brand flex-2">
                      {item.name}
                    </p>
                    <span className="border-b border-dotted border-white flex-1"></span>
                    <p className="text-2xl text-slate-50">R{item.price}</p>
                  </div>{" "}
                  <div className="pr-2">
                    <p className="text-slate-200 mt-2 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            </Link>
          ))}
        </div>
        <Image
          src="/images/salad.jpg"
          alt="salad"
          width={1500}
          height={997}
          className="w-full h-32 md:h-44 object-cover my-3"
        />
        <h2 className="text-center mt-8 mb-2 text-yellow-400 text-3xl md:text-4xl font-brand font-bold">
          Salads
        </h2>
        <div className="grid gird-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {salads?.map((item) => (
            <Link key={item.id} href={`/menu/salads/${item.id}`}>
              <Fragment>
                <div className="cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                  <div className="flex ">
                    <p className="text-lg text-slate-100 font-brand flex-2">
                      {item.name}
                    </p>
                    <span className="border-b border-dotted border-white flex-1"></span>
                    <p className="text-2xl text-slate-50">R{item.price}</p>
                  </div>{" "}
                  <div className="pr-2">
                    <p className="text-slate-200 mt-2 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            </Link>
          ))}
        </div>
        <Image
          src="/images/stews.jpg"
          alt="stews"
          width={1500}
          height={1000}
          className="w-full h-32 md:h-44 object-cover my-3"
        />
        <h2 className="text-center mt-8 mb-2 text-yellow-400 text-3xl md:text-4xl font-brand font-bold">
          Stews
        </h2>
        <div className="grid gird-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stews?.map((item) => (
            <Link key={item.id} href={`/menu/stews/${item.id}`}>
              <Fragment>
                <div className="cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                  <div className="flex ">
                    <p className="text-lg text-slate-100 font-brand flex-2">
                      {item.name}
                    </p>
                    <span className="border-b border-dotted border-white flex-1"></span>
                    <p className="text-2xl text-slate-50">R{item.price}</p>
                  </div>{" "}
                  <div className="pr-2">
                    <p className="text-slate-200 mt-2 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            </Link>
          ))}
        </div>
        <Image
          src="/images/meals.jpg"
          alt="meals"
          width={1500}
          height={1000}
          className="w-full h-32 md:h-44 object-cover my-3"
        />
        <h2 className="text-center mt-8 mb-2 text-yellow-400 text-3xl md:text-4xl font-brand font-bold">
          Meals
        </h2>
        <div className="grid gird-cols-1 mb-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {meals?.map((item) => (
            <Link key={item.id} href={`/menu/meals/${item.id}`}>
              <Fragment>
                <div className="cursor-pointer transition-all hover:bg-slate-50/10 py-2 rounded px-2 my-3 gap-2 items-end">
                  <div className="flex ">
                    <p className="text-lg text-slate-100 font-brand flex-2">
                      {item.name}
                    </p>
                    <span className="border-b border-dotted border-white flex-1"></span>
                    <p className="text-2xl text-slate-50">R{item.price}</p>
                  </div>{" "}
                  <div className="pr-2">
                    <p className="text-slate-200 mt-2 text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fragment>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MenuList;
