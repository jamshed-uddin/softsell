import React, { useEffect, useRef, useState } from "react";
import { ArrowRightIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      content:
        "Hi 👋 I'm your SoftSell assistant. Ask me anything about licenses, valuations, or our services!",
    },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [messageLoading, setMessageLoading] = useState(false);
  const [defaultMessage, setDefaultMessage] = useState(
    "How do I sell my license?"
  );
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // on key down listener for enter key
  const handleKeyDown = (e) => {
    if (window.innerWidth <= 768) return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // set human or ai message to messages state
  const setMsgToState = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  // request making function
  const sendMessageToAi = async (userInput) => {
    try {
      setMessageLoading(true);
      const aiRespones = await axios.post("/api/query", {
        userQuery: userInput,
      });
      console.log(aiRespones);

      setMsgToState(aiRespones?.data);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
      console.log(error);
    } finally {
      setMessageLoading(false);
    }
  };

  // pre mentioned default message sender
  const sendDefaultMessage = async () => {
    setMsgToState({ sender: "human", content: defaultMessage });
    await sendMessageToAi(defaultMessage);
  };

  // sending function by manual typing and sending

  const handleSend = async () => {
    setMsgToState({
      sender: "human",
      content: input,
    });

    setInput("");
    setError("");
    await sendMessageToAi(input);
  };

  return (
    <div className="flex flex-col h-full w-full ">
      <div className=" lg:rounded-lg  flex flex-col h-full overflow-hidden">
        {/* Chat header */}
        <div className="px-2 py-2 border-b border-gray-200   rounded-t-lg">
          <h2 className=" font-semibold">AI Assistant</h2>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-2 space-y-3 ">
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
                    ? " rounded-tr-none border border-white "
                    : " rounded-tl-none pl-0"
                }`}
              >
                <div> {message.content}</div>
              </div>
            </div>
          ))}

          {error && (
            <div className="flex justify-center">
              <div className="text-xs text-center text-red-500  ">{error}</div>
            </div>
          )}
          {messageLoading && (
            <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* default message */}
        {messages.length < 2 && (
          <div
            className="w-full flex justify-end  items-center mb-4 pr-3 cursor-pointer"
            onClick={sendDefaultMessage}
          >
            <div className="rounded-tr-none border border-white max-w-[80%] rounded-lg py-1 px-2 animate-fadeIn  text-sm">
              {defaultMessage} <ArrowRightIcon className="w-4 h-4 inline" />
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-2 border-t border-gray-200 ">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 focus:outline-0 text-sm"
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
