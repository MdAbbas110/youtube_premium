import { User } from "lucide-react";
import React from "react";

const ChatMessage = ({ name, messages }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <User className="size-6 text-red-700" />
      <span className="font-bold px-2">{name}</span>
      <span>{messages}</span>
    </div>
  );
};

export default ChatMessage;
