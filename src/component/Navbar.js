import React from "react";
import {
  AiOutlineSearch,
  AiOutlineCompress,
  AiOutlineSetting,
} from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { FiMoon } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import girl from '../Assets/girl pp.jpg'

const Navbar = () => {
  return (
    <div className="pt-4 pb-3 border-b border-gray-500 flex justify-between items-center">
      <div className="flex border border-gray-500 mx-5 px-2 items-center">
        <input placeholder="Search..." className="outline-none" />
        <AiOutlineSearch />
      </div>

      <div className="flex gap-5">
        <div className="flex gap-1">
          <TbWorld className="text-xl cursor-pointer" />
          <div>English</div>
        </div>
        <FiMoon className="text-xl cursor-pointer" />
        <AiOutlineCompress className="text-xl cursor-pointer" />
        <div className="relative ">
          <IoMdNotificationsOutline className="text-xl cursor-pointer " />
          <span className="right-[-6px] top-[-6px] flex justify-center items-center bg-red-600 w-4 h-4 rounded-[50%] absolute text-xs">1</span>
        </div>
        <div className="relative ">
          <BiComment className="text-xl cursor-pointer" />
          <span className="right-[-6px] top-[-6px] flex justify-center items-center bg-red-600 w-4 h-4 rounded-[50%] absolute text-xs">2</span>
        </div>
        <TfiMenuAlt className="text-xl cursor-pointer" />
        <img src={girl} alt="beautiful girl" className="object-cover bg-yellow-500  w-8 h-8 rounded-full" />
        <AiOutlineSetting className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;