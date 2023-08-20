import { Routes, Route } from 'react-router-dom';
import Login from '../compoent/Login/Login';
import Register from '../compoent/Register/Register';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/"   element={<Login/>} />
        <Route path="/register"  element={<Register/>} />
      </Routes>
    </div>
  );
};

export default Routing;