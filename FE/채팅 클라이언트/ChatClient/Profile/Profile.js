import { useEffect, useState } from 'react';
import ProfilePicture from './ProfilePicture';
import ProfilePictureUpload from './ProfilePictureUpload';
import StatusMessage from './StatusMessage';
import ChangePassword from './ChangePassword';
import Nickname from './Nickname';
import axios from 'axios';

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
      const response = await axios.get('/api/profile'); // 실제 API 엔드포인트로 수정 필요
      const data = response.data;
      setImageUrl(data.imageUrl);
      setNickname(data.nickname);
      setStatus(data.status);
    } catch (error) {
      console.error('Error fetching profile information:', error);
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