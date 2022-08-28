import Image from "next/future/image";

const MapSection = () => {
  return (
          <section className="bg-slate-900 py-12">
             <div className="max-w-7xl mx-auto px-4">
              <Image src="/images/deal_party.jpg" alt="Deal Party" width={1686} height={1125} className="max-w-3xl border border-yellow-400 mx-auto w-full object-cover" />
             </div>
          </section>
  )
};
export default MapSection;
