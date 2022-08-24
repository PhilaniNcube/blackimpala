import Image from "next/future/image";

const HomeSectionOne = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url(/images/chalk.jpg)" }}
    >
      <div className="w-full z-20 h-full">
        <div className="max-w-7xl gap-4 mx-auto px-4 grid grid-cols-12 py-16">
          <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center items-end px-4 text-right">
            <h2 className="font-brand font-bold text-yellow-400 text-2xl md:text-4xl">
              About Us
            </h2>
            <p className="text-slate-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              reprehenderit distinctio aspernatur voluptatum aut nisi cum
              laudantium numquam veritatis ab autem eum cumque praesentium saepe
              repellendus vitae harum enim, quod inventore incidunt soluta,
              debitis maiores.
            </p>
          </div>
          <div className="hidden md:col-span-2 h-full w-full"></div>
          <div className="col-span-12 md:col-span-5 h-full flex flex-col justify-center items-start text-left">
            <h2 className="font-brand font-bold text-yellow-400 text-2xl md:text-4xl">
             Our Story
            </h2>
            <p className="text-slate-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              reprehenderit distinctio aspernatur voluptatum aut nisi cum
              laudantium numquam veritatis ab autem eum cumque praesentium saepe
              repellendus vitae harum enim, quod inventore incidunt soluta,
              debitis maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeSectionOne;
