import {useState} from 'react';

const ProfilePictureUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onUpload(file);
    console.log(selectedFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default ProfilePictureUpload;