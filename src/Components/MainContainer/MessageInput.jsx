import { useState } from 'react';
import './MessageInput.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MessageInput = ({ chatId, onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSend = () => {
    if (message.trim()) {
      console.log(`Message has been sended to chat id ${chatId}: ${message}`);
      onSendMessage(chatId, message);
      setMessage('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a message..."
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}><i className="fa-solid fa-paper-plane"></i></button>
    </div>
  );
};

export default MessageInput;
