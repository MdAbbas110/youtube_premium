import React from "react";
import { useDispatch } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { Menu, SearchSlash, User, Youtube } from "lucide-react";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 items-center cursor-pointer ">
        <Menu onClick={() => toggleMenuHandler()} className="size-7" />
        <span className="flex items-center mx-2">
          <Youtube className="size-8" color="red" />
          <p className="text-lg ml-1 font-semibold">Premium</p>
        </span>
      </div>
      <div className="col-span-10 flex items-center justify-center ">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2 "
          type="text"
        />
        <div className="rounded-r-full border-r border-t border-b px-5 py-2 bg-gray-100 border-gray-400">
          <SearchSlash />
        </div>
      </div>
      <div className="col-span-1 flex justify-end ">
        <User className="size-8" />
      </div>
    </div>
  );
};

export default Head;
