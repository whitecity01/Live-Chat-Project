import { useState } from 'react';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // 비밀번호 변경 로직 실행
      console.log('비밀번호 변경 완료');
    } else {
      console.log('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="새 비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <button type="submit">비밀번호 변경</button>
    </form>
  );
};

export default ChangePassword;
