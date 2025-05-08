import React, { useEffect, useRef, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [messageLoading, setMessageLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "human",
        content: input,
      },
    ]);

    try {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-full w-full ">
      <div className=" lg:rounded-lg  flex flex-col h-full overflow-hidden">
        {/* Chat header */}
        <div className="px-2 py-2 border-b border-gray-200   rounded-t-lg">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-2 space-y-4 ">
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex ${
                message.sender === "human" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg py-1 px-2 animate-fadeIn flex items-center gap-1 text-sm ${
                  message.sender === "human"
                    ? "bg-primary text-primary-foreground rounded-tr-none border border-white "
                    : " rounded-tl-none pl-0"
                }`}
              >
                <div> {message.content}</div>
              </div>
            </div>
          ))}
          {error && (
            <div className="flex justify-center">
              <div className="text-xs text-center text-red-500 border border-red-400 w-fit px-4 rounded-xl py-1">
                {error}
              </div>
            </div>
          )}
          {messageLoading && <span>Loading...</span>}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-2 border-t border-gray-200 ">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 focus:outline-0"
            />
            <button
              onClick={handleSend}
              disabled={input.trim() === "" || messageLoading}
              className="w-5 h-5 disabled:opacity-60"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
