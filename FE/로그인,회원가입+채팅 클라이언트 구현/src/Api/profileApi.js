import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;


const getImage = async () => {
  try {
    const res = await axios.post(`${serverIp}/users/profile/image`, null, {
      headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
      withCredentials: true,
    });
    const data = res.data;
    console.log(data);

    return data.imageUrl;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }
};

const getNickname = async () => {
  try {
    const res = await axios.post(`${serverIp}/users/profile/nickname`, null, {
      headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
      withCredentials: true,
    });
    const data = res.data;
    console.log(data);

    return data.nickname;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }

};

const getStatus = async () => {
  try {
    const res = await axios.post(`${serverIp}/users/profile/status`, null, {
      headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
      withCredentials: true,
    });
    const data = res.data;
    console.log(data);

    return data.status;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }
};


export { getImage, getNickname, getStatus};