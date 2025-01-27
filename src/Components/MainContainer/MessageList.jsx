import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className={`message-item ${message.sender === 'user' ? 'message-user' : 'message-other'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
