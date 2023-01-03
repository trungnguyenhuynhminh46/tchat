import React from "react";
// Compoents
import Sidebar from "./modules/Home/Sidebar";

const Home = () => {
  return (
    <div className="flex min-h-screen min-w-screen">
      <Sidebar />
      {/* End sidebar */}
      <div className="basis-3/4 flex justify-center items-center">
        <span className="text-gray-400 font-semibold text-lg">
          Select a conversation to start chatting
        </span>
      </div>
    </div>
  );
};

export default Home;
