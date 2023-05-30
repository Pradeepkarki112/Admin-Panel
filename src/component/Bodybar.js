import React from "react";

const Bodybar = () => {
  return (
    <div className="my-7 mx-5 ">
      <div className="bg-yellow-500 w-64 h-40 p-3 grid gap-5 rounded-lg">
        <div className="flex justify-between">
          <div>USERS</div>
          <div className="flex text-green-700">
          <div>arrow</div>
          <div>+ 5 %</div>
          </div>
        </div>
        <div className="text-3xl">720</div>
        <div className="flex justify-between">
          <div className="border-b border-gray-500">See all users</div>
          <div>contact</div>
        </div>
      </div>
    </div>
  );
};

export default Bodybar;
