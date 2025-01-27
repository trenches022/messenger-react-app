import './ChatHeader.css'

const ChatHeader = ({ chat }) => {
  return (
    <>
      <div className="chat-header">
        <img src={chat.pfp} alt={`${chat.userName}'s avatar`} />
        <h2>{chat.name}</h2>
        <div className="chat-status">
        <p>{chat.status}</p>
        </div>
      </div>
    </>
    
  );
};

export default ChatHeader;
