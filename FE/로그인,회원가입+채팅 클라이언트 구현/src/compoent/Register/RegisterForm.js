import UseFormValidation from "../../Hook/UseFormValidation";
import {RegisterPost} from "../../Api/RegisterApi";

const RegisterForm = () => {
  const { register, handleSubmit, errors, emailRules, passwordRules } = UseFormValidation();

  return (
    <form onSubmit={handleSubmit((data) => RegisterPost(data))}>
      <label htmlFor="email"/>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        autoComplete="username"
        {...register("emailCheck", emailRules)}
      />
      {errors.emailCheck && (
        <small className="errors" role="alert">{errors.emailCheck.message}</small>
      )}
      

      <label htmlFor="password"/>
      <input
        id="password"
        type="password"
        placeholder="비밀번호 입력"
        autoComplete="current-password"
        {...register("passwordCheck", passwordRules)}
      />
      {errors.passwordCheck && (
        <small className="errors" role="alert">{errors.passwordCheck.message}</small>
      )}
      
      <small>비밀번호 규칙 : 8자이상 숫자 + 영문자 + 특수문자</small>
      
      <button type="submit">회원가입</button>

    </form>
  );
};

export default RegisterForm;