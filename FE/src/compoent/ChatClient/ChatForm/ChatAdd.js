import { useState } from "react";
import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;

const ChatAdd = ({ onChatAdded }) => {
  const [nickname, setNickname] = useState("");

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleAddChat = async () => {
    try {
      const name = {"nickname":nickname};
      const res = await axios.post(`${serverIp}/chat/add`, name, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const newChat = res.status;

      console.log(res.data);
      // 유저 추가 성공 시에 onUserAdded 콜백 호출하여 친구 목록 갱신
      if (newChat === 200) {
        onChatAdded();
      }
      else{
        console.log("에러 발생 : status 반환 오류 ")
      }
    } catch (error) {
      console.error("에러 발생 :", error);
    }
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="대화할 상대 입력"
        value={nickname}
        onChange={handleInputChange}
      />
      <button onClick={handleAddChat}>채팅 추가</button>
    </div>
  );
};

export default ChatAdd;
  