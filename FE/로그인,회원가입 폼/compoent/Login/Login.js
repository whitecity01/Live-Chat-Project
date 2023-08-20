import LoginForm from "./LoginForm";
import LoginTitle from "./LoginTitle";
import RegisterLink from "./RegisterLink";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container" >
        <div className="login-title">
          <LoginTitle/>
        </div>
        <div className="form-container">
          <LoginForm/>
          <RegisterLink/>
        </div>
    </div>
  );
};

export default Login;
