import { useState } from "react";
import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;

const FriendsAdd = ({ onUserAdded }) => {
  const [nickname, setNickname] = useState("");

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };

  const handleAddUser = async () => {
    try {  // 서버에 유저 정보 추가 요청
      const res = await axios.post(`${serverIp}/friends/addFriend`, nickname, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const newUser = res.status;

      // 유저 추가 성공 시에 onUserAdded 콜백 호출하여 친구 목록 갱신
      if (newUser === 200) {
        onUserAdded();
      }
      else{
        console.log("에러 발생 : status 반환 오류 ")
      }
    } catch (error) {
      console.error("에러 발생 : ", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="추가할 닉네임 입력"
        value={nickname}
        onChange={handleInputChange}
      />
      <button onClick={handleAddUser}>친구 추가</button>
    </div>
  );
};

export default FriendsAdd;
