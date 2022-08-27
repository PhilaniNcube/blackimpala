import Image from "next/future/image";

const EventsGrid = () => {

     const events = [
       {
         name: "Wine Wednesday",
         img: {
           src: "/images/wine_wednesday.jpg",
           width: 2048,
           height: 1365,
         },
         description: "Wine special available for R50 from 17:00-20:00",
       },
       {
         name: "Sunday Groove",
         img: {
           src: "/images/impala_sunday.jpg",
           width: 2048,
           height: 1365,
         },
         description:
           "Do come join us and enjoy our Sunday day groove delicious Riblet Platter special. Don't forget to tag along a few friends",
       },
       {
         name: "Impala Saturday",
         img: {
           src: "/images/impala_saturday.jpg",
           width: 2048,
           height: 1365,
         },
         description:
           "Weekends are for chilled vibes, good food, cold beverages and good company",
       },
       {
         name: "TGIF",
         img: {
           src: "/images/impala_fridays.jpg",
           width: 2048,
           height: 1365,
         },
         description:
           "Join us as we kick start the weekend with our Friday special with good food & company. Hot Wings & Chips Special for R50",
       },
       {
         name: "Slay Queen Nights",
         img: {
           src: "/images/impala_thursday.jpg",
           width: 2048,
           height: 1365,
         },
         description:
           "Join us every Thursday for #slayqueennights special 2x Large Pizza's for only R120 and our 3 Litre Slay Queen cocktail for R100",
       },
     ];


  return (
    <section className="bg-slate-800">
      <h2 className="my-4 text-yellow-400 font-brand font-bold px-8 text-center text-2xl md:text-3xl">
        Throught the week you can enjoy different events.
      </h2>
      <div className="max-w-7xl gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-4 py-12">
        {events.map((event) => (
          <div key={event.name} className="w-full flex flex-col">
            <Image
              src={event.img.src}
              alt={event.name}
              className="w-full rounded-t-lg object-cover"
              width={event.img.width}
              height={event.img.height}
            />
            <div className="bg-slate-900 py-2 h-36 rounded-b-lg w-full px-4">
              <h3 className="text-slate-200 text-2xl mb-2 font-brand">{event.name}</h3>
              <p className="text-yellow-400 text-md font-brand leading-6">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default EventsGrid;
