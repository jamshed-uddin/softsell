"use client";

import React, { useEffect, useState } from "react";

import {
  ChatBubbleOvalLeftEllipsisIcon,
  SparklesIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ChatBox from "./ChatBox";
const AiBot = ({ className }) => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className={` ${className}`}>
      {/* chat bubble icon */}
      <div className="p-1  rounded-full relative cursor-pointer">
        {openChat ? (
          <XMarkIcon
            className="w-10 h-10 "
            onClick={() => setOpenChat(false)}
          />
        ) : (
          <div onClick={() => setOpenChat(true)}>
            <ChatBubbleOvalLeftEllipsisIcon className="w-9 h-9 " />

            <SparklesIcon className="w-5 h-5 absolute -top-1 -right-1 animate-bounce" />
          </div>
        )}
      </div>

      {/* chatbox body */}
      <div className="relative">
        <div
          className={`absolute bottom-12 lg:bottom-10 right-0 lg:right-10  border border-gray-300 overflow-hidden transition-all duration-300 rounded-xl bg-black  ${
            openChat ? "lg:h-96 lg:w-80 h-[70vh] w-[87vw]" : "h-0 w-0 opacity-0"
          }`}
        >
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default AiBot;
