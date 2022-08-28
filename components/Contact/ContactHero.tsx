import Image from "next/future/image";

const ContactHero = () => {
  return (
    <section className="relative max-h-[60vh] bg-slate-900">
      <Image
        src="/images/contact.jpg"
        width={1686}
        height={1125}
        alt="Background"
        className="max-h-[60vh] w-full object-cover"
      />
      <div className="absolute bg-slate-900/80 inset-0">
        <div className="h-full justify-center items-center flex flex-col max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-6xl text-yellow-400 font-brand font-bold">
            Contact Us
          </h1>

        </div>
      </div>
    </section>
  );
};
export default ContactHero;
