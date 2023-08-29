import axios from 'axios'
const serverIp = process.env.REACT_APP_SERVER_IP;

const RegisterPost = async (user) => {
    try {
        console.log(user);
        const email = user.emailCheck;
        const password = user.passwordCheck;

        const data = {
            email: email,
            password: password
        };
        console.log(data);

        const response = await axios.post(`${serverIp}/users/register`, data, {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        });

        console.log('회원가입 성공:', response.data);
    } catch (error) {
        console.error('회원가입 실패:', error);
    }
}

export {RegisterPost};