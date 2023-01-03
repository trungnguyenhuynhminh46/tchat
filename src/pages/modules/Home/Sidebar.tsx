import React, { useState } from "react";
// Components
import SearchBox from "../../../components/SearchBox";
import SelectUser from "../../../components/SelectUser";

const Sidebar = () => {
  // States
  const displayName = "Nguyễn Huỳnh Minh Trung";
  const email = "trungnguyenhuynhminh46@gmail.com";
  const [seachBoxText, setSearchBoxText] = useState("");
  return (
    <div className="flex flex-col items-stretch justify-start bg-[#282f39]">
      <div className="flex justify-between items-center px-4 py-5 gap-10">
        <img
          src="https://images.unsplash.com/photo-1672676048356-2ee34abaafa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-10 h-10 rounded-[50%] flex-shrink-0"
        />
        <div className="flex flex-col text-sm">
          <span title="Nguyễn Huỳnh Minh Trung">
            {displayName.slice(0, 18) + "..."}
          </span>
          <span title="trungnguyenhuynhminh46@gmail.com">
            {email.slice(0, 20) + "..."}
          </span>
        </div>
        <button className="flex-shrink-0 border-none outline-none bg-transparent rounded-[50%] bg-gray-600 h-[40px] w-[40px]">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
      {/* End header */}
      <SearchBox text={seachBoxText} setText={setSearchBoxText} isLoading />
      {/* End searchbox */}
      <div className="py-3 overflow-y-scroll max-h-[650px]">
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
        <SelectUser />
      </div>
      {/* End conversations */}
    </div>
  );
};

export default Sidebar;
