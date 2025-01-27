import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './MainContainer.css';

const MainContainer = () => {
  const { chatId } = useParams();

  const [chatData, setChatData] = useState({
    1: { 
      id: 1, 
      status: 'online', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-2.png',
      name: 'Rock Lee', 
      messages: [ 
       { text: 'Hello!', sender: 'other' },
       { text: 'How are you?', sender: 'other' }
      ] },
    2: { 
      id: 2, 
      status: 'last seen 10 minutes ago', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-3.png', 
      name: 'Chris Travis', 
      messages: [ 
        { text: 'Yo!', sender: 'other' },
        { text: 'Whats up?', sender: 'other' }
       ] },
    3: { 
      id: 3, 
      status: 'online', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-10.png', 
      name: 'John Bow', 
      messages: [ 
        { text: 'Hi', sender: 'other' },
        { text: 'How u doin?', sender: 'other' }
       ] },
    4: { 
      id: 4, 
      status: 'online', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-1.png', 
      name: 'Johnnie Vicenti', 
      messages: [ 
        { text: 'Brother', sender: 'other' },
        { text: 'Take it easy', sender: 'other' }
       ] },
    5: { 
      id: 5, 
      status: 'online', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-11.png', 
      name: 'Chris Bumpsted', 
      messages: [ 
        { text: 'hello', sender: 'other' },
        { text: 'is everything ok?', sender: 'other' }
       ] },
    6: { 
      id: 6, 
      status: 'online', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-12.png', 
      name: 'Lee K', 
      messages: [ 
        { text: 'hi', sender: 'other' },
        { text: 'gym today?', sender: 'other' }
       ] },
    7: { 
      id: 7, 
      status: 'last seen 1 hour ago', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-13.png', 
      name: 'Peter Braski', 
      messages: [ 
        { text: 'meow meow', sender: 'other' },
        { text: '123', sender: 'other' }
       ] },
    8: { 
      id: 8, 
      status: 'last seen 48 minutes ago', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-1.png', 
      name: 'Soulja Boy', 
      messages: [ 
        { text: 'Meow!', sender: 'other' },
        { text: 'How are you?', sender: 'other' }
       ] },
    9: { 
      id: 9, 
      status: 'last seen 52 minutes ago', 
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-15.png', 
      name: 'Trisha Maw', 
      messages: [ 
        { text: 'hejka!', sender: 'other' },
        { text: 'co tam?', sender: 'other' }
       ] },
  });

  const selectedChat = chatData[chatId];

  if (!selectedChat) {
    return <div className="no-chat">Chat doesnt exist</div>;
  }

  const addMessage = (chatId, newMessage, sender = 'user') => {
    setChatData((prevChatData) => ({
      ...prevChatData,
      [chatId]: {
        ...prevChatData[chatId],
        messages: [...prevChatData[chatId].messages, 
        { text: newMessage, sender },
      ],
      },
    }));
  };

  return (
    <div className="main-container">
      <ChatHeader chat={selectedChat} />
      <div className="chat-content">
        <MessageList messages={selectedChat.messages} />
        <MessageInput chatId={selectedChat.id} onSendMessage={addMessage} />
      </div>
    </div>
  );
};

export default MainContainer;
