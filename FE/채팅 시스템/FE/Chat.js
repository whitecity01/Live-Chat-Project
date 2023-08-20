import React, { useCallback, useEffect, useState } from "react";
import "./Chat.css";

import io from "socket.io-client"; // 0. 클라이언트 소캣 생성

// React 창이 새롭게 생설될 때 마다, 클라이언트 또한 새롭게 생성됨
const socket = io.connect("http://127.0.0.1:4000"); // 1. 서버로 소켓 conncet 요청
socket.emit("init", "[init] Client -> Server"); // 2. 클라이언트에서 서버쪽으로 데이터를 전달 (데이터  송/수신 확인)

function Chat() {
  const [chatArr, setChatArr] = useState([]);
  const [chat, setChat] = useState({ name: "", message: "" });
  
  useEffect(() => { // 3. 소켓 종료
    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {  // [수신] 서버로부터 온 메세지를 받음
    socket.on("receive message", (message) => { // chatArr 배열에 chatArr 콜백함수를 뒤에 붙여줌. (추가해줌)
      setChatArr((chatArr) => chatArr.concat(message));
    }); //receive message이벤트에 대한 콜백을 등록해줌
  }, []);

  const buttonHandler = useCallback((e) => {
    socket.emit("send message", { name: chat.name, message: chat.message }); 
  }, [chat]);

  
  const changeMessage = useCallback((e) => {
    setChat({ name: chat.name, message: e.target.value });
  },[chat]);

  const changeName = useCallback((e) => {
      setChat({ name: e.target.value, message: chat.message });
  },[chat]);


  return (
    <div className="App">
      <div className="Box">
      {/* 메세지 출력 창 */}
        <div className="ChatBox">
          {chatArr.map((ele,index) => (
            <div className="Chat" key={index}>
              <div className="ChatName">[{ele.name}]</div>
              <div className="ChatLog">{ele.message}</div>
            </div>
          ))}
        </div>


        {/* 입력 창 */}
        <div className="InputBox">    
          <input className="InputName" placeholder="이름" onChange={changeName}></input>
          <span></span>
          <input className="InputText" placeholder="내용" onChange={changeMessage}></input>
          <button onClick={buttonHandler}>등록</button>
        </div>
        
      </div>
    </div>
  );
}

export default Chat;