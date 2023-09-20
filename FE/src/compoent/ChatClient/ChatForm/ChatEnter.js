import React from "react";
import { Link } from "react-router-dom";

const ChatEnter = ({ targetNickname }) => {

  
  const encodedNickname = encodeURIComponent(targetNickname);
  return (
    <div >
      <Link to={`/chat/${encodedNickname}`}>채팅방 입장</Link>
    </div>
  );
};

export default ChatEnter;
