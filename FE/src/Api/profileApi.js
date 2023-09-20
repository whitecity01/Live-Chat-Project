import axios from "axios";
const serverIp = process.env.REACT_APP_SERVER_IP;


const getImage = async () => {
  try {
    const res = await axios.get(`${serverIp}/users/profile/image`, {
      responseType: 'blob',
      headers: {'ngrok-skip-browser-warning': '69420'},
      withCredentials: true,
    });
    const blob = new Blob([res.data], { type: res.headers['content-type'] });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }
};

const getNickname = async () => {
  try {
    const res = await axios.get(`${serverIp}/users/profile/nickname`, {
      headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
      },
      withCredentials: true,
    });
    const data = res.data;
    console.log(data.nickname);

    return data.nickname;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }

};

const getStatus = async () => {
  try {
    const res = await axios.get(`${serverIp}/users/profile/status`, {
      headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
      },
      withCredentials: true,
    });
    const data = res.data;
    console.log(data.status);
    //console.log(data.상태메세지);

    return data.status;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }
};




const statusUpdate = async (status) => {
  try {
    const newStatus = { "status":status};
    const res = await axios.post(`${serverIp}/users/profile/statusUpdate`,newStatus , {
      headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
      },
      withCredentials: true,
    });
    const data = res.data;
    console.log(data.status);
    //console.log(data.상태메세지);

    return data.status;
  } catch (error) {
    console.error("에러 발생 :", error);
    return null;
  }
}

export { getImage, getNickname, getStatus, statusUpdate};