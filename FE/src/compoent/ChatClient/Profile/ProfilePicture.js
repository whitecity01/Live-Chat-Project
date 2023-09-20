const ProfilePicture = ({ imageUrl }) => {
  const src = imageUrl || "https://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg?w=400&amp;h=400&amp;auto=format&amp;fm=jpg";
  return <img width="120" height="120" className="tw-profile-image" src={src} alt="프로필 이미지"></img>
};

export default ProfilePicture;