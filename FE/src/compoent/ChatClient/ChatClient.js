import React, { useState } from 'react';
import Profile from './Profile/Profile';
import Friends from './Friends/Friends';
import ChatForm from './ChatForm/ChatForm';
import Option from './Option/Option';
import './ChatClient.scss';
const ChatClient = () => {
    const [activeSlot, setActiveSlot] = useState('profile'); // 현재 활성화된 슬롯

    const renderActiveSlot = () => {
      switch (activeSlot) {
        case 'profile':
          return <Profile />;
        case 'friends':
          return <Friends />;
        case 'chat':
          return <ChatForm />;
        case 'options':
          return <Option />;
        default:
          return null;
      }
    };
  
    return (
      <div className="App">
        <div className="slots">
          <div className="slot" onClick={() => setActiveSlot('profile')}>프로필</div>
          <div className="slot" onClick={() => setActiveSlot('friends')}>친구정보</div>
          <div className="slot" onClick={() => setActiveSlot('chat')}>채팅</div>
          <div className="slot" onClick={() => setActiveSlot('options')}>옵션 선택</div>
        </div>
        <div className="content">
          {renderActiveSlot()}
        </div>
      </div>
    );
};

export default ChatClient;



