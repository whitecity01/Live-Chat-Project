import { useState } from 'react';
import { PasswordChange } from '../../../Api/PasswordChange';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== newPassword) {
      
      PasswordChange(password,newPassword);
    } else {
      console.log('현재 비밀번호와 새 비밀번호가 일치합니다');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="현재 비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="새 비밀번호"
        value={newPassword}
        onChange={handleNewPasswordChange}
      />
      <button type="submit">비밀번호 변경</button>
    </form>
  );
};

export default ChangePassword;
