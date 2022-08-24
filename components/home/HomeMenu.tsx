import Image from "next/future/image";
import Link from "next/link";

const HomeMenu = () => {
  return (
    <section className="relative bg-slate-900 bg-blend-multiply backdrop-grayscale-0">
      <Image src="/images/brandy.jpg" alt="Brandy" width={1500} height={844} className="w-full max-h-[50vh] bg-slate-800 object-cover" />
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex flex-col items-start justify-around">
        <Link href="/menu/platters">
          <a className="font-brand text-yellow-400 text-3xl md:text-4xl">Platters Menu</a>
        </Link>
        <Link href="/menu/meals">
          <a className="font-brand text-yellow-400 text-3xl md:text-4xl">Meals Menu</a>
        </Link>
        <Link href="/menu/drinks">
          <a className="font-brand text-yellow-400 text-3xl md:text-4xl">Drinks Menu</a>
        </Link>
      </div>
    </section>
  );
};
export default HomeMenu;
