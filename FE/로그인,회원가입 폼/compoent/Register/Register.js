//import { Link } from 'react-router-dom';
import LoginLink from "./LoginLink";
import RegisterForm from "./RegisterForm";
import RegisterTitle from "./RegisterTitle";

const Register = () => {
  return (
    <div className="register-container" >
    <div className="register-title">
      <RegisterTitle/>
    </div>
    <div className="form-container">
      <RegisterForm/>
      <LoginLink/>
    </div>
</div>
  );
};

export default Register;
