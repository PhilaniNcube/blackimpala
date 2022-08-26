import { RiFacebookBoxLine, RiFacebookLine, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {

let date = new Date();

console.log(date.getFullYear())

const tradingHours = [
  "Monday - Thursday: 11am - 12pm",
  "Friday - Saturday: 10am - 1am",
  "Sunday: 10am - 11pm",
]

  return (
    <footer className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full">
            <h3 className="text-yellow-400 font-brand text-2xl font-bond">
              Locations
            </h3>
            <p className="text-slate-200 text-md font-brand underline">
              Black Impala Restaurant
            </p>
            <p className="text-slate-200 text-sm mt-2 font-brand">
              Dom Pedro Jetty
            </p>
            <p className="text-slate-200 text-sm font-brand">
              Port Elizabeth Harbour
            </p>
            <p className="text-slate-200 text-sm font-brand">6001</p>
            <p className="text-slate-200 text-sm font-brand">Port Elizabeth</p>
            <p className="text-slate-200 text-md font-brand mt-8 underline">
              Black Impala Tshisanyama
            </p>
            <p className="text-slate-200 text-sm mt-2 font-brand">
              153 Grahamstown Road
            </p>
            <p className="text-slate-200 text-sm font-brand">Port Elizabeth</p>
          </div>
          <div className="w-full text-center">
            <h2 className="text-4xl text-center text-yellow-400 font-brand font-bold">
              Black Impala
            </h2>
            <p className="text-slate-200 text-center text-sm mt-2 font-brand">
              Connect with us on Social Media
            </p>
            <div className="flex mt-4 space-x-2 items-center justify-center">
              <RiYoutubeLine className="text-2xl text-yellow-400" />
              <RiFacebookLine className="text-2xl text-yellow-400" />
              <RiInstagramLine className="text-2xl text-yellow-400" />
            </div>
            <p className="text-md mt-4 text-slate-300">
              {date.getFullYear()} Black Impala. All Rights Reserved & Right Of
              Admission Reserved
            </p>
          </div>
          <div className="w-full text-center text-slate-200">
            <h2 className="text-xl text-center text-yellow-400 font-brand font-bold">
              Trading Hours
            </h2>
            {tradingHours.map((item, i) => (
              <p key={i} className="text-sm py-2">{item}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
