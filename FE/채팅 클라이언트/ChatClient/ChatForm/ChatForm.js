import { useState, useEffect } from "react";
import axios from "axios";
import ChatAdd from "./ChatAdd";

const ChatForm = () => {
  const [chatData, setChatData] = useState([]);

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    try {
      const response = await axios.get("/api/chats"); // 임시 API
      const chats = response.data;

      // 유저 정보 설정
      setChatData(chats);
    } catch (error) {
      console.error("Error fetching chat data:", error);
    }
  };

  return (
    <div>
      
      <ChatAdd onUserAdded={fetchChatData} />
      <h2>대화 목록</h2>
      {chatData.map((chat) => (
        <div key={chat.id}>
          <h3>{chat.name}</h3>
          {/* 필요한 다른 정보들 출력 */}
        </div>
      ))}
    </div>
  );
};

export default ChatForm;