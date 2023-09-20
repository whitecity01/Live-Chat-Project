import axios from 'axios';
const serverIp = process.env.REACT_APP_SERVER_IP;
const ProfilePictureUpload = ({ onUpload }) => {
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData(); // FormData 객체를 생성하여 이미지를 포함
    formData.append('image', file);

    try {
      const res = await axios.post(`${serverIp}/users/profile/imageUpdate`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
        withCredentials: true,
      });
      console.log('업로드 완료:', res.data.imageUrl);
      onUpload(file); // 업로드 완료 후 콜백 호출
    } catch (error) {
      console.error('업로드 실패:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ProfilePictureUpload;