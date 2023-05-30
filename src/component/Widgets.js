import React from "react";
import { BsPerson } from "react-icons/bs";
import {
  MdOutlineShoppingCart,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import {
  AiOutlineDollarCircle,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";

const Bodybar = () => {
  return (
    <div className="my-7 mx-5 flex justify-between">
      <div className="w-72 h-40 p-3 grid gap-5 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>USERS</div>
          <div className="flex text-green-700 items-center">
            <AiOutlineUp />
            <div>+ 5 %</div>
          </div>
        </div>
        <div className="text-3xl">720</div>
        <div className="flex justify-between">
          <div className="border-b border-gray-500">See all users</div>
          <BsPerson className="text-4xl text-red-950 rounded-[5px] p-2 bg-red-400" />
        </div>
      </div>

      <div className="w-72 h-40 p-3 grid gap-5 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>ORDERS</div>
          <div className="flex text-green-700 items-center">
            <AiOutlineDown />
            <div>+ 5 %</div>
          </div>
        </div>
        <div className="text-3xl">260</div>
        <div className="flex justify-between">
          <div className="border-b border-gray-500">See all users</div>
          <MdOutlineShoppingCart className="text-4xl text-yellow-950 rounded-[5px] p-2 bg-yellow-400" />
        </div>
      </div>

      <div className="w-72 h-40 p-3 grid gap-5 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>EARNINGS</div>
          <div className="flex text-green-700 items-center">
            <AiOutlineUp />
            <div>+ 2 %</div>
          </div>
        </div>
        <div className="text-3xl">$4.6K</div>
        <div className="flex justify-between">
          <div className="border-b border-gray-500">See all users</div>
          <AiOutlineDollarCircle className="text-4xl text-green-950 rounded-[5px] p-2 bg-green-400" />
        </div>
      </div>

      <div className="w-72 h-40 p-3 grid gap-5 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <div>MY BALANCE</div>
          <div className="flex text-green-700 items-center">
            <AiOutlineUp />
            <div>+ 12 %</div>
          </div>
        </div>
        <div className="text-3xl">$7.8K</div>
        <div className="flex justify-between">
          <div className="border-b border-gray-500">See all users</div>
          <MdOutlineAccountBalanceWallet className="text-4xl text-purple-950 rounded-[5px] p-2 bg-purple-400" />
        </div>
      </div>
    </div>
  );
};

export default Bodybar;
