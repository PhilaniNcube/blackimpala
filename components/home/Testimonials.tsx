import Image from "next/future/image";

const Testimonials = () => {
  return (
    <section className="bg-slate-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <p className="text-md text-center text-gray-100 font-brand">
          Testimonials
        </p>
        <h3 className="text-3xl text-yellow-400 font-brand font-bold text-center mb-3">
          Happy Customers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/hat-lady.jpg"
              alt="user"
              className="w-36 h-36 object-cover"
              width={6240}
              height={4160}
            />
            <div>
              <p className="text-slate-200 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                incidunt necessitatibus animi nihil quasi nesciunt omnis
                voluptatem vitae mollitia, sit amet at ratione illo architecto?
              </p>
              <h4 className="font-brand text-yellow-400 text-xl font-bold">
                Naledi
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/hat-guy.jpg"
              alt="user"
              className="w-36 h-36 object-cover"
              width={1500}
              height={1000}
            />
            <div>
              <p className="text-slate-200 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                incidunt necessitatibus animi nihil quasi nesciunt omnis
                voluptatem vitae mollitia, sit amet at ratione illo architecto?
              </p>
              <h4 className="font-brand text-yellow-400 text-xl font-bold">
                Tabo
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/yellow-guy.jpg"
              alt="user"
              className="w-36 h-36 object-cover"
              width={1500}
              height={1000}
            />
            <div>
              <p className="text-slate-200 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                incidunt necessitatibus animi nihil quasi nesciunt omnis
                voluptatem vitae mollitia, sit amet at ratione illo architecto?
              </p>
              <h4 className="font-brand text-yellow-400 text-xl font-bold">
                Trevor
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src="/images/group.jpg"
              alt="user"
              className="w-36 h-36 object-cover"
              width={1500}
              height={1000}
            />
            <div>
              <p className="text-slate-200 text-sm leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                incidunt necessitatibus animi nihil quasi nesciunt omnis
                voluptatem vitae mollitia, sit amet at ratione illo architecto?
              </p>
              <h4 className="font-brand text-yellow-400 text-xl font-bold">
                Thelma
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/table.jpg"
        alt="table"
        className="w-full h-[60vh] object-cover"
        width={1500}
        height={1000}
      />
    </section>
  );
};
export default Testimonials;
