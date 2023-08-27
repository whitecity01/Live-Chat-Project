const ProfilePicture = ({ imageUrl }) => {
  return <img src={imageUrl} alt="프로필 사진" style={{ maxWidth: '200px', maxHeight: '200px' }} />;
};

export default ProfilePicture;