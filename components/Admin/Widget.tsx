import { MdOutlineArrowCircleUp, MdSupervisedUserCircle } from "react-icons/md";

const Widget = () => {
  return (
    <div
      className="flex px-5 py-5 flex-1 justify-between bg-slate-200 rounded-lg"
      id="widget"
    >
      <div className="flex flex-col">
        <span id="title" className="font-bold text-slate-600 text-lg">
          Users
        </span>
        <span id="data" className="text-2xl text-slate-700 font-bold">
          5234
        </span>
        <span id="link" className="hover:underline cursor-pointer text-slate-800 font-medium">
          See all customers
        </span>
      </div>
      <div className="flex flex-col">
        <span id="precentage">
          <MdOutlineArrowCircleUp className="h-8 w-8 text-slate-400" /> 20%
        </span>
        <MdSupervisedUserCircle className="h-8 w-8 text-slate-400" />
      </div>
    </div>
  );
};
export default Widget;
