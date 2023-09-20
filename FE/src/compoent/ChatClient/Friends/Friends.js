import { useState, useEffect } from "react";
import axios from "axios";
import FriendsAdd from "./FriendsAdd";
import './Friends.scss';
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

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(`${serverIp}/friends`, {
        headers: {
          'Content-Type': `application/json`,
          'ngrok-skip-browser-warning': '69420',
        },
        withCredentials: true,
      });

      const users = res.data;
      console.log(res.data);
      
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
      {usersData ? (
        <ul>
        {usersData.map((user) => (
          <li key={user.id}>
            <div>
            <img className="img-file" src={user.imageUrl || "https://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg?w=400&h=400&auto=format&fm=jpg"} alt={user.nickname} />
            </div>
            <div>
              <p className="nickname"><strong>닉네임:</strong> {user.nickname}</p>
              <p className="status"><strong>상태메시지:</strong> {user.status}</p>
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

export default FriendsList;
