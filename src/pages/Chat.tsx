import React from "react";
// Compoents
import Sidebar from "./modules/Home/Sidebar";
import {
  IconExclamation,
  IconPaperAirPlane,
  IconSmile,
  IconGif,
  IconStickers,
  IconImage,
} from "../components/Icons";

const Chat = () => {
  return (
    <div className="flex min-h-screen min-w-screen">
      <Sidebar />
      {/* End sidebar */}
      <div className="basis-3/4 flex justify-center items-center">
        <span className="text-gray-400 font-semibold text-lg">
          Select a conversation to start chatting
        </span>
        <IconExclamation />
        <IconPaperAirPlane />
        <IconSmile />
        <IconGif />
        <IconStickers />
        <IconImage />
      </div>
    </div>
  );
};

export default Chat;
