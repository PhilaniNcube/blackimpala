import Image from "next/image";

const AboutHero = () => {
  return <section className="relative">
    <Image src="/images/blackimpala.jpg" width={960} height={859} alt="Wall" className="object-cover object-center w-full aspect-[7/2]" />
    <div className="container py-10">
      <h1 className="text-4xl font-semibold">Our Story</h1>
      <div className="grid grid-cols-1 gap-3 my-5 md:grid-cols-2">
        <p className="text-lg">We are a group of individuals who have a passion for food and hospitality. We have come together to create a space where people can come together and enjoy a good meal in a relaxed environment. We believe in using fresh, locally sourced ingredients to create delicious meals that everyone can enjoy. Our goal is to create a space where people can come together, share a meal, and create lasting memories.</p>
        <p className="text-lg">We are committed to providing our customers with the best possible experience. We take pride in our food and service and strive to create an environment that is welcoming and inclusive. We are constantly looking for ways to improve and grow, and we welcome feedback from our customers. We are excited to share our passion for food and hospitality with you and look forward to welcoming you to our restaurant.</p>
      </div>
    </div>
  </section>;
};
export default AboutHero;
