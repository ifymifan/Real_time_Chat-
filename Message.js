import React from "react";

const Message = ({ msg, user }) => {
  const isOwnMessage = msg.uid === user.uid;
  return (
    <div className={`p-2 ${isOwnMessage ? "text-right" : "text-left"}`}>
      <p className={`inline-block p-2 rounded-lg ${isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
        <strong>{msg.sender}: </strong> {msg.text}
      </p>
    </div>
  );
};

export default Message;
