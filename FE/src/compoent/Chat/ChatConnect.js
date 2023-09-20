import React, { useEffect, useState } from 'react';
const serverIp = process.env.REACT_APP_SERVER_IPS;


const ChatConnect = ({ chatRoomId, yourName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket(`wss://${serverIp}//socket/chat/${chatRoomId}`);
    websocket.onopen = () => {
      console.log('connected');
    };
    
    websocket.onmessage = (event) => {
      const messageData = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, messageData]);
    };
    
    websocket.onerror = (error) => {
      console.log(`WebSocket error: ${error}`);
    };

    setWs(websocket);

    return () => {
      websocket.close();
    }
  }, [chatRoomId]);

  const sendMessage = (event) => {
   event.preventDefault();
   
   if(newMessage !== "") { 
     ws.send(JSON.stringify({
       nickname: yourName,
       message: newMessage,
     }));

     setNewMessage("");
   }
 };

 return (
   <div>
     <ul className='chat-container'>
       {messages.map((msgData, index) =>
         <li className='chat-list' key={index}>
           <strong className='chat-name'>{msgData.nickname}</strong>: {msgData.message}
         </li>
       )}
     </ul>

     <form className='chat-form' onSubmit={sendMessage}>
       <input className='chat-input' type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
       <button className='chat-submit' type="submit">Send</button>
     </form>
   </div>
 );
}

export default ChatConnect;