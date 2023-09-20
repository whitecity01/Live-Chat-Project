import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;

const PasswordChange = async (currentPassword,newPassword) => {
  try {
    console.log(currentPassword);
    console.log(newPassword);
    const pw = { "currentPassword" : currentPassword, "newPassword" : newPassword};
    
    const res = await axios.post(`${serverIp}/users/profile/pwChange`, pw, {
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
