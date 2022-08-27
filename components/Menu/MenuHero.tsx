import Image from "next/future/image";

const MenuHero = () => {
  return (
    <header className="relative max-h-[60vh]">
      <Image
        src="/images/steak.jpg"
        className="max-h-[60vh] object-cover bg-slate-800"
        alt="Steak"
        width={2000}
        height={1125}
      />
      <div className="absolute inset-0 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center h-full justify-center">
          <h1 className="text-yellow-400 font-brand text-center font-bold text-3xl md:text-5xl lg:text-7xl">
            Menu
          </h1>
        </div>
      </div>
    </header>
  );
};
export default MenuHero;
