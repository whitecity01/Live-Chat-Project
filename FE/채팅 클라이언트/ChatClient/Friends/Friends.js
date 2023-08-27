import { useState, useEffect } from "react";
import axios from "axios";
import FriendsAdd from "./FriendsAdd";

const FriendsList = () => {
  const [usersData, setUsersData] = useState([]);

  // 컴포넌트가 마운트될 때 유저 정보 가져오기
  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await axios.get("/api/users"); // 임시 API
      const users = response.data;

      // 유저 정보 설정
      setUsersData(users);
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  return (
    <div>
      <h2>친구 추가</h2>
      <FriendsAdd onUserAdded={fetchUsersData} />
      <h2>친구 목록</h2>
      {usersData.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          {/* 필요한 다른 유저 정보들을 출력 */}
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
