import Image from "next/future/image";

const ContactFormSection = () => {
  return (
    <section className="py-12 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 lg:gap-12">
        <div className="w-full md:w-2/3 col-span-3 md:col-span-2 flex flex-col justify-center">
          <h2 className="text-slate-200 text-3xl font-brand">
            Drop Us A Message
          </h2>
          <form className="w-full py-6">
            <div className="flex flex-col my-2">
              <label htmlFor="full_name" className="text-sm text-slate-200">
                Full Name
              </label>
              <input
                className="border border-slate-100 bg-transparent px-3 py-2 placeholder:text-slate-400"
                name="full_name"
                id="full_name"
                required
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="email" className="text-sm text-slate-200">
                Email Address
              </label>
              <input
                className="border bg-transparent border-slate-100 px-3 py-2 placeholder:text-slate-400"
                name="email"
                id="email"
                required
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col my-2">
              <label htmlFor="message" className="text-sm text-slate-200">
              Message
              </label>
              <textarea
                className="border bg-transparent border-slate-100 px-3 py-2 placeholder:text-slate-400"
                name="message"
                id="message"
                placeholder="Type your message here"
                rows={5}
              />
            </div>
            <button type="submit" className="bg-yellow-400 text-slate-900 font-bold px-8 py-2 border-0 mt-2">Submit</button>
          </form>
        </div>
        <div className="hidden md:flex col-span-1">
          <Image src="/images/new_platter.jpg" alt="meat" width={1125} height={1686} className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};
export default ContactFormSection;
