import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "This will be a long day i will complete the tutorial 🚀",
        })
      );
    }, u);

    return () => clearInterval(timer);
  }, []);

  const handleLiveChat = (e) => {
    e.preventDefault();
    setLiveMessage("");

    dispatch(
      addMessage({
        name: "abbas abidi",
        message: liveMessage,
      })
    );
  };

  return (
    <>
      <div className="ml-2 h-[600px] flex flex-col-reverse  bg-slate-100 rounded-lg w-full p-2 border overflow-y-scroll border-black ">
        <div>
          {chatMessages.map((chat, idx) => (
            <ChatMessage key={idx} name={chat.name} messages={chat.message} />
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => handleLiveChat(e)}
        className="w-full  p-2 ml-2  border border-black"
      >
        <input
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-96 px-2 py-1 border-b"
          type="text"
          placeholder="Live comment"
        />
        <button
          onClick={handleLiveChat}
          className="bg-slate-100 p-2 rounded-md ml-2"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
