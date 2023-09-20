import axios from 'axios';
import ChatConnect from './ChatConnect';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.scss';
const serverIp = process.env.REACT_APP_SERVER_IP;

const Chat = () => {
    const { targetNickname } = useParams();
    
    const [chatData, setChatData] = useState(null); // chatData 초기값을 null로 설정
    const [error, setError] = useState(null); // 에러 상태 추가
    
    // 컴포넌트가 마운트될 때 유저 정보 가져오기
    useEffect(() => {
        fetchChatData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const fetchChatData = async () => {
        try {
            const friendName = { 'friendName': targetNickname };
            const res = await axios.post(`${serverIp}/chat`, friendName, {
                headers: { 'Content-Type': `application/json` },
                withCredentials: true,
            });

            const chats = res.data;
            console.log(chats);

            setChatData(chats);
            setError(null); // 에러가 없을 경우 에러 상태를 초기화

        } catch (error) {
            console.error("에러 발생 :", error);
            setChatData(null); // 에러가 발생하면 chatData를 초기화
            setError("인증된 사용자가 아닙니다."); // 에러 메시지 설정
        }
    };

    return (
        <>
            {error ? (
                // 에러가 발생한 경우 에러 메시지를 표시
                <div>{error}</div>
            ) : (
                // 에러가 없고 chatData가 있는 경우 ChatConnect를 렌더링
                chatData && <ChatConnect chatRoomId={chatData.chatRoomId} yourName={chatData.yourName} />
            )}
        </>
    );
};

export default Chat;



