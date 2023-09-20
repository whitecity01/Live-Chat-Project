import { useState } from 'react';
import { statusUpdate } from '../../../Api/profileApi';

const ChangeStatus = () => {
  const [newStatus, setNewStatus] = useState('');

  const handleNewStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    statusUpdate(newStatus);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="새 상태메세지 입력"
        value={newStatus}
        onChange={handleNewStatusChange}
      />
      <button type="submit">상태메세지 변경</button>
    </form>
  );
};

export default ChangeStatus;