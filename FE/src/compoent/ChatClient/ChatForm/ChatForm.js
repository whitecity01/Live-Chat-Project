import { useState, useEffect } from "react";
import axios from "axios";
import ChatAdd from "./ChatAdd";
import ChatEnter from "./ChatEnter";
//import '../Friends/Friends.scss';

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

      const res = await axios.get(`${serverIp}/chat/chatrooms`, {
        headers: {
          'Content-Type': `application/json`,
          'ngrok-skip-browser-warning': '69420',
        },
        withCredentials: true,
      });
      const chats = res.data;
      console.log(chats);
      
      setChatData(chats);
    } catch (error) {
      console.error("에러 발생 :", error);
    }
  };


  return (
    <div>
      <ChatAdd onChatAdded={fetchChatData} />
      <h2>대화 목록</h2>
      {chatData ? (
        <ul>
      {chatData.map((user) => (
        
        <li key={user.id}>
          <div>
            <img className="img-file" src={user.imageUrl || "https://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg?w=400&h=400&auto=format&fm=jpg"} alt={user.nickname} style={{ maxWidth: '100px' }} />
          </div>
          <div>
            
            <p className="nickname"><strong>닉네임:</strong> {user.nickname}</p>
            <p className="status"><strong>최근 메시지:</strong> {user.latestMessage}</p>
          </div>
          <div className="chat-enter-container" >
            <ChatEnter className='chat-enter' targetNickname={user.nickname} />
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