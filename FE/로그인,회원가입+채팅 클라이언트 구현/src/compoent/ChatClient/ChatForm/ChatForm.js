import { useState, useEffect } from "react";
import axios from "axios";
import ChatAdd from "./ChatAdd";
const serverIp = process.env.REACT_APP_SERVER_IP;

const ChatForm = () => {
  const [chatData, setChatData] = useState([{
    "id": 2,
    "nickname": "김승제",
    "imageUrl" : "naver.com",
    "recentMsg": "자고싶다"
  },
  {
    "id": 3,
    "nickname": "주민기",
    "imageUrl" : "naver.com",
    "recentMsg": "전역하고싶다"
  }]);

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    try {
      const res = await axios.get(`${serverIp}/chats`, {
        headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
        withCredentials: true,
      });
      const chats = res.body;
      console.log(chats);
      setChatData(chats);
    } catch (error) {
      console.error("에러 발생 :", error);
    }
  };

  return (
    <div>
      <ChatAdd onUserAdded={fetchChatData} />
      <h2>대화 목록</h2>
      {chatData ? (
        <ul>
      {chatData.map((user) => (
        <li key={user.id}>
          <div>
            <img src={user.imageUrl} alt={user.nickname} style={{ maxWidth: '100px' }} />
          </div>
          <div>
            <p><strong>닉네임:</strong> {user.nickname}</p>
            <p><strong>최근 메시지:</strong> {user.recentMsg}</p>
          </div>
        </li>
      ))}
      </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ChatForm;