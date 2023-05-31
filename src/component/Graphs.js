import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Graphs = () => {
  return (
    <div className="flex">
      <div className=" m-5 p-3 w-96 h-84 shadow-lg text-center text-gray-500">
        <div className="flex justify-between">
          <div>Total Revenue</div>
          <BiDotsVerticalRounded className="text-xl border-gray-500" />
        </div>
        <CircularProgressbar
          className="seventyper w-32 h-32 mt-3"
          value={70}
          text={"70%"}
          strokeWidth={5}
        />
        <div className=" mt-3">Total sales made today</div>
        <div className=" mt-3 text-4xl text-black">$420</div>
        <div className="mt-3">
          Previous transactions processing. Last payments may not be included.
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <div>Target</div>
            <div className="flex items-center text-pink-600 mt-3">
              <AiOutlineDown />
              <div>$12.4k</div>
            </div>
          </div>
          <div>
            <div>Last week</div>
            <div className="flex items-center text-green-600 mt-3">
              <AiOutlineUp />
              <div>$12.4k</div>
            </div>
          </div>
          <div>
            <div>Last Month</div>
            <div className="flex items-center text-pink-600 mt-3">
              <AiOutlineDown />
              <div>$12.4k</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[1000px] shadow-xl">
        <h1 className=" text-[#888] font-semibold ml-2 mt-2 ">
          Last 6 Months (income)
        </h1>

        <ResponsiveContainer width="100%" aspect={2 / 1}>
          <AreaChart
            width={730}
            height={210}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />

            <CartesianGrid className=" stroke-white " strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graphs;