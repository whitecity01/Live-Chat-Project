// import { Routes, Route, Link } from 'react-router-dom';
// import Chat from '../compoent/ChatClient/Chat';
import axios from 'axios'
const serverIp = process.env.REACT_APP_SERVER_IP;

const LoginPost = async (data) => {
    try {
        console.log(data);
        console.log(serverIp);
        const response = await axios.post(`${serverIp}/users/login`, data, {
            headers: {'Content-Type': 'application/json'},
            withCredentials: true
        });
        
        console.log('로그인 성공:',response.data);
        window.location.href = '/chat_client';
    } catch (error) {
        console.error('로그인 실패:', error);
    }

}

const logout = async () => {
    try {
        //console.log(process.env.REACT_APP_SERVER_IP);
        const response = await axios.post(`${serverIp}/users/logout`, null, { //get 요청 오류로 post 사용
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        //document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // 적절한 쿠키 이름을 사용

        console.log('로그아웃 완료:', response);
        window.location.href = '/'; //로그인 폼으로 이동
    } catch (error) {
        console.error('로그아웃 실패:', error);
    }
}

export {LoginPost, logout};

// axios.post('https:/hi', user,{
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // .then(response => {
    //     console.log('등록 성공:', response);
    // })
    // .catch(error => {
    //     console.error('등록 실패:', error);
    // });