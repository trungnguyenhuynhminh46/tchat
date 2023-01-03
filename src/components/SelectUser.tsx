import React from "react";
// Components
import { Link } from "react-router-dom";

const SelectUser = () => {
  const uid = "123";
  const users = [1, 2, 3];
  const content = "This is content";

  // 1 - 1 Conversation
  if (users.length === 2) {
    return (
      <Link
        to={`/${uid}`}
        className="py-3 px-4 flex gap-5 transition-all duration-300 hover:bg-[#334155]"
      >
        <img
          src="https://images.unsplash.com/photo-1672676048356-2ee34abaafa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-12 h-12 rounded-[50%]"
        />
        <div className="flex flex-col">
          <span className="text-base text-gray-200">Nguyễn Văn A</span>
          <div className="flex gap-2 text-gray-400 items-center text-sm">
            <span>{content.slice(0, 10) + "..."}</span>
            <div className="w-1 h-1 rounded-[50%] bg-gray-600"></div>
            <span>11 Dec 2022 at 10:00PM</span>
          </div>
        </div>
      </Link>
    );
  }
  //   Group conversation without group_image
  return (
    <Link
      to={`/${uid}`}
      className="py-3 px-4 flex gap-5 transition-all duration-300 hover:bg-[#334155]"
    >
      <div className="relative w-12 h-12">
        <img
          src="https://images.unsplash.com/photo-1672676048356-2ee34abaafa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="absolute z-20 left-0 bottom-0 w-8 h-8 rounded-[50%] object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1672641983456-2f0b2d97e8e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="absolute z-10 top-0 right-0 w-10 h-10 rounded-[50%] object-cover"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-base text-gray-200">Nguyễn Văn A</span>
        <div className="flex gap-2 text-gray-400 items-center text-sm">
          <span>{content.slice(0, 10) + "..."}</span>
          <div className="w-1 h-1 rounded-[50%] bg-gray-600"></div>
          <span>11 Dec 2022 at 10:00PM</span>
        </div>
      </div>
    </Link>
  );
};

export default SelectUser;
