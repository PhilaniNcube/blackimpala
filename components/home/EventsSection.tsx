import Image from "next/future/image";
import Link from "next/link";

const EventsSection = () => {
  return (
    <section className="bg-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-yellow-400 mb-6 text-center font-brand font-bold">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="w-full">
            <Image
              src="/images/dj.jpg"
              alt="event"
              className="w-full object-cover"
              width={1500}
              height={1000}
            />
            <div className="w-full py-6">
              <p className="text-slate-100 text-sm">17 Sept 2022</p>
              <h4 className="text-yellow-400 text-xl md:text-2xl mt-2 font-brand underline">
                DJ SoSo on the decks
              </h4>
              <p className="text-slate-200 text-md leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quam quod fugiat minus perspiciatis, modi deleniti.
              </p>
              <p className="font-brand text-yellow-500 text-md my-2">
                Read More
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/party.jpg"
              alt="event"
              className="w-full object-cover"
              width={1500}
              height={1000}
            />
            <div className="w-full py-6">
              <p className="text-slate-100 text-sm">23 Sept 2022</p>
              <h4 className="text-yellow-400 text-xl md:text-2xl mt-2 font-brand underline">
                Friday Night Lights
              </h4>
              <p className="text-slate-200 text-md leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quam quod fugiat minus perspiciatis, modi deleniti.
              </p>
              <p className="font-brand text-yellow-500 text-md my-2">
                Read More
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/guitar.jpg"
              alt="event"
              className="w-full object-cover"
              width={1500}
              height={1000}
            />
            <div className="w-full py-6">
              <p className="text-slate-100 text-sm">30 Sept 2022</p>
              <h4 className="text-yellow-400 text-xl md:text-2xl mt-2 font-brand underline">
                Ladies Night
              </h4>
              <p className="text-slate-200 text-md leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quam quod fugiat minus perspiciatis, modi deleniti.
              </p>
              <p className="font-brand text-yellow-500 text-md my-2">
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
        <Link href="/events">
          <a className="text-slate-900 mt-4 font-bold font-brand px-8 py-2 text-center bg-yellow-200">Read more</a>
        </Link>
        </div>
      </div>
    </section>
  );
};
export default EventsSection;
