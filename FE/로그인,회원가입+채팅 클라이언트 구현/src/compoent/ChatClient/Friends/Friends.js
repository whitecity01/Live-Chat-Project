import { useState, useEffect } from "react";
import axios from "axios";
import FriendsAdd from "./FriendsAdd";
const serverIp = process.env.REACT_APP_SERVER_IP;

const FriendsList = () => {
  const [usersData, setUsersData] = useState([{
    "id": 2,
    "nickname": "김승제",
    "imageUrl": "naver.com",
    "status": "자고싶다"
  },
  {
    "id": 3,
    "nickname": "주민기",
    "imageUrl": "naver.com",
    "status": "전역하고싶다"
  }]);
  // "id" : 2,
  // "nickname" : "김승제",
  // "imageUrl" : "naver.com",
  // "status" : "자고싶다"
  // 이렇게 저장될 예정

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(`${serverIp}/friends`, {
        headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
        withCredentials: true,
      });
      const users = res.body;

      // 유저 정보 설정
      setUsersData(users);
    } catch (error) {
      console.error("에러 발생 :", error);
    }
  };

  return (
    <div>
      <h2>친구 추가</h2>
      <FriendsAdd onUserAdded={fetchUsersData} />
      <h2>친구 목록</h2>
      {usersData.map((user) => (
        <li key={user.id}>
          <div>
            <img src={user.imageUrl} alt={user.nickname} style={{ maxWidth: '100px' }} />
          </div>
          <div>
            <p><strong>닉네임:</strong> {user.nickname}</p>
            <p><strong>상태메시지:</strong> {user.status}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default FriendsList;
