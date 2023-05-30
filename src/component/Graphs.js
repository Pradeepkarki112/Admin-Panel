import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Graphs = () => {
  return (
    <div>
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
    </div>
  );
};

export default Graphs;
