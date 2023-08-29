import { useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfilePictureUpload from './ProfilePictureUpload';
import StatusMessage from './StatusMessage';
import ChangePassword from './ChangePassword';
import Nickname from './Nickname';
import axios from 'axios';
const serverIp = process.env.REACT_APP_SERVER_IP;

const Profile = () => {
  const [imageUrl, setImageUrl] = useState(''); // 프로필 사진 URL
  const [nickname, setNickname] = useState('김승제'); // 닉네임
  const [status, setStatus] = useState('피곤하다'); // 상태 메세지

  const handlePictureUpload = (file) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const fetchProfileInfo = async () => {
    try {
      const res = await axios.get(`${serverIp}/chat`, {
        headers: { "Content-Type": "application/json" }, //이건 없어도 될듯?
        withCredentials: true,
      });
      const data = res.data;
      setImageUrl(data.imageUrl);
      setNickname(data.nickname);
      setStatus(data.status);
      
    } catch (error) {
      console.error('에러 발생 :', error);
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []); // 컴포넌트가 마운트되면 프로필 정보를 가져옴

  return (
    <div>
      <h2>프로필</h2>
      <ProfilePicture imageUrl={imageUrl} />
      <ProfilePictureUpload onUpload={handlePictureUpload} />
      <Nickname nickname={nickname} />
      <StatusMessage status={status} />
      <ChangePassword />
    </div>
  );
};

export default Profile;