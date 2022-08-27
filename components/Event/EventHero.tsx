import Image from "next/future/image";

const EventHero = () => {



  return (
    <section className="relative max-h-[60vh] bg-slate-900">
      <Image
        src="/images/event.jpg"
        width={1686}
        height={1125}
        alt="Background"
        className="max-h-[60vh] w-full object-cover"
      />
      <div className="absolute bg-slate-900/80 inset-0">
        <div className="h-full justify-center items-center flex flex-col max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl text-yellow-400 font-brand font-bold">Black Impala Events</h1>
          <p className="text-slate-200 text-md md:text-lg font-brand mt-3 text-center max-w-[80ch]">We hold many events at our 2 locations. Come and join us at either Black Impala Restaurant at the Harbour or Black Impala Tshisanyama in Deal Party</p>
        </div>
      </div>
    </section>
  );
};
export default EventHero;
