import Logout from "../../Login/Logout";
import ChangePassword from "./ChangePassword";
import ChangeStatus from "./ChangeStatus";

const Option = () => {
    return (
        <div >
            <div>옵션</div>
            <div>상태메세지 변경</div>
            <ChangeStatus/>
            <div>비밀번호 변경</div>
            <ChangePassword/>
            
            <Logout/>
        </div>
    );
  };
  
  export default Option;
  