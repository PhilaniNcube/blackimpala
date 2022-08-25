import Image from "next/future/image";
import { Fragment } from "react";

const FounderSection = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image src="/images/deck.jpg" alt="Deck" className="w-full object-cover rounded" width={625} height={468} />
          </div>
          <div className="flex flex-col justify-center px-2">
            <h3 className="text-yellow-400 text-3xl font-brand font-bold">
              Our Team
            </h3>
            <p className="text-slate-100 font-brand text-md md:text-lg leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique consequuntur cupiditate nobis voluptates, nostrum nulla
              hic odit, sit perspiciatis cum amet quibusdam vel tempore
              necessitatibus suscipit possimus a illo maxime maiores quis
              fugiat! Nam, atque?
            </p>
            <h3 className="text-2xl text-yellow-400 mt-3 font-brand">
              Lloyd Mthembu
            </h3>
            <p className="text-slate-400 text-xl font-brand">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FounderSection;
