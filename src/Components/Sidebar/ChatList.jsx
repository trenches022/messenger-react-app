import ChatItem from "./ChatItem";
import './ChatList.css'
import { useNavigate } from "react-router-dom";

const ChatList = () => {

  const navigate = useNavigate();

  const chats = [
    {
      id: 1,
      userName: 'Rock Lee',
      lastMessage: 'Do you have any vacation plan?',
      time: '18:26',
    },
    {
      id: 2,
      userName: 'Chris Travis',
      lastMessage: 'You might miss this last week',
      time: '18:23',
    },
    {
      id: 3,
      userName: 'John Bow',
      lastMessage: 'everything is ok!',
      time: '18:20',
    },
    {
      id: 4,
      userName: 'Rick Owens',
      lastMessage: 'Take it easy',
      time: '18:20',
    },
    {
      id: 5,
      userName: 'Chris Bumpsted',
      lastMessage: 'Gym today?',
      time: '17:20',
    },
    {
      id: 6,
      userName: 'Lee K',
      lastMessage: 'No',
      time: '17:02',
    },
    {
      id: 7,
      userName: 'Piotr Nałkowski',
      lastMessage: 'Cya later',
      time: '16:40',
    },
    {
      id: 8,
      userName: 'Soulja Boy',
      lastMessage: 'Nothing',
      time: '16:32',
    },
    {
      id: 9,
      userName: 'Trisha Maw',
      lastMessage: 'Lets make a deal',
      time: '16:07',
    },
  ];

  const handleChatSelect = (chatId) => {
    navigate(`messages/${chatId}`)
  }

  return (
    <>
      <div className="chatlist-container">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} onClick={() => handleChatSelect(chat.id)} />
        ))}
      </div>
    </>
  )
}

export default ChatList;