import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;

const PasswordChange = async (newPassword) => {
  try {
    console.log(newPassword);

    const res = await axios.post(`${serverIp}/users/login`, newPassword, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    if (res.status === 200) {
      console.log("비밀번호 변경 성공:", res.data);
      window.location.href = "/";
    }
    else{
      console.log("현재 비밀번호가 일치하지 않습니다");
    }
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

export { PasswordChange };
