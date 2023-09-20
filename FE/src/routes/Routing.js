import { Routes, Route } from 'react-router-dom';
import Login from '../compoent/Login/Login';
import Register from '../compoent/Register/Register';
import ChatClient from '../compoent/ChatClient/ChatClient';
import Chat from '../compoent/Chat/Chat';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/"   element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
        <Route path="/chat_client"  element={<ChatClient/>} />
        <Route path='/chat/:targetNickname' element={<Chat/>}/>
      </Routes>
    </div>
  );
};

export default Routing;