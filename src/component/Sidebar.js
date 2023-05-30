import React from "react";
import { MdDashboard } from "react-icons/md";
import { BsPerson, BsCreditCard2Back } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { ImStatsDots } from "react-icons/im";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdHealthAndSafety } from "react-icons/md";
import { SiLogstash } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="w-[12%] border border-gray-500">
      <div className="py-3 font-semibold text-2xl border-b border-gray-500 flex justify-center text-purple-600">
        Admin-Panel
      </div>

      <div className="mt-6 ml-4 text-gray-500">
        <div className="mb-4">
          <div className="pb-2">MAIN</div>
          <div className="ml-2 items-center flex gap-2">
            <MdDashboard className="text-xl text-purple-600" />
            <div>Dashboard</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="pb-2">LISTS</div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <BsPerson className="text-xl text-purple-600" />
            <div>Users</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <SiHomeassistantcommunitystore className="text-xl text-purple-600" />
            <div>Products</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <BsCreditCard2Back className="text-xl text-purple-600" />
            <div>Orders</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <TbTruckDelivery className="text-xl text-purple-600" />
            <div>Delivery</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="pb-2">USEFUL</div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <ImStatsDots className="text-xl text-purple-600" />
            <div>Stats</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <IoIosNotificationsOutline className="text-xl text-purple-600" />
            <div>Notifications</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="pb-2">SERVICE</div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <MdHealthAndSafety className="text-xl text-purple-600" />
            <div>System Health</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <SiLogstash className="text-xl text-purple-600" />
            <div>Logs</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <AiFillSetting className="text-xl text-purple-600" />
            <div>Settings</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="pb-2">USER</div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <CgProfile className="text-xl text-purple-600" />
            <div>Profile</div>
          </div>
          <div className="ml-2 items-center flex gap-2 pb-2">
            <TbLogout className="text-xl text-purple-600" />
            <div>Logout</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="pb-2">THEME</div>
          <div className="flex gap-4">
            <div className="border-2 border-purple-600 rounded-md w-8 h-8 bg-white"></div>
            <div className="rounded-md w-8 h-8 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;