import Image from "next/image";
import Link from "next/link";

const menus = [
  {
    image: "/images/menu/food_menu_1.jpeg",
    alt: "Food Menu 1",
    description: "Food Menu 1"
  },
  {
    image: "/images/menu/food_menu_2.jpeg",
    alt: "Food Menu 2",
    description: "Food Menu 2"
  },
  {
    image: "/images/menu/drinks_menu.jpeg",
    alt: "Drinks Menu 1",
    description: "Drinks Menu 1"
  },
  {
    image: "/images/menu/drinks_menu_2.jpeg",
    alt: "Drinks Menu 2",
    description: "Drinks Menu 2"
  },
  {
    image: "/images/menu/drinks_menu_3.jpeg",
    alt: "Drinks Menu 3",
    description: "Drinks Menu 3"
  },
  {
    image: "/images/menu/cocktail_menu_1.jpeg",
    alt: "Cocktail Menu 1",
    description: "Cocktail Menu 1"
  },
  {
    image: "/images/menu/cocktail_menu_2.jpeg",
    alt: "Cocktail Menu 2",
    description: "Cocktail Menu 2"
  }
];

const MenuImages = () => {
  return (
			<section className="py-8">
				<div className="container lg:px-0">
					<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
						{menus.map((menu, index) => (
							<Link key={menu.alt} href={`${menu.image}`}>
								<div className="relative">
									<Image
										src={menu.image}
										alt={menu.alt}
										width={400}
										height={600}
										className="object-cover w-full"
									/>
									<p className="text-center">{menu.description}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		);
};
export default MenuImages;
