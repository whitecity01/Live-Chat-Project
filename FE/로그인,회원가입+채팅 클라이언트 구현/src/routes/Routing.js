import { Routes, Route } from 'react-router-dom';
import Login from '../compoent/Login/Login';
import Register from '../compoent/Register/Register';
import Chat from '../compoent/ChatClient/Chat';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/"   element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
        <Route path="/chat"  element={<Chat/>} />
      </Routes>
    </div>
  );
};

export default Routing;