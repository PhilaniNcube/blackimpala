import { format, isToday } from "date-fns";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdMoreVert } from "react-icons/md";
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {

  let today = format(new Date(), "dd-MMM");

  console.log(isToday(new Date()));



  return (
    <div className="col-span-2 p-4 shadow-lg rounded-lg">
      <div id="top" className="flex justify-between">
        <h2 className="text-xl text-slate-600 font-medium">Total Revenue</h2>
        <MdMoreVert className="text-3xl text-slate-500" />
      </div>
      <div
        id="bottom"
        className="p-5 flex flex-col items-center justify-center gap-4"
      >
        <div id="progress-chart" className="w-28 h-28">
          <CircularProgressbar value={80} text={`R3500`} strokeWidth={3} />
        </div>
        <p className="text-slate-700 font-medium text-lg mt-2">
          Today's sales:
        </p>
        <p className="font-semibold text-2xl text-green-700">R3500</p>
        <p className="font-semibold text-lg text-green-700">30 orders</p>
        <div id="summary" className="text-center">
          <div>
            <p className="text-slate-800 font-medium text-lg">Target</p>
            <div>
              <p className="text-slate-800 font-medium text-md">R1200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
