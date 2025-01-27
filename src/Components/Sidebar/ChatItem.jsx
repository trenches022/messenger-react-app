import './ChatItem.css'
import { Link } from 'react-router-dom';

const ChatItem = () => {

  const chatData = [
    {
      id: 1,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-2.png',
      status: 'online',
      userName: 'Rock Lee',
      lastMessage: 'Ok',
      time: '18:26',
    },
    {
      id: 2,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-3.png',
      status: 'offline',
      userName: 'Chris Travis',
      lastMessage: 'Nevermind',
      time: '18:23',
    },
    {
      id: 3,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-10.png',
      status: 'online',
      userName: 'John Bow',
      lastMessage: 'everything is ok!',
      time: '18:20',
    },
    {
      id: 4,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-1.png',
      status: 'online',
      userName: 'Johnnie Vicenti',
      lastMessage: 'Take it easy',
      time: '18:20',
    },
    {
      id: 5,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-11.png',
      status: 'online',
      userName: 'Chris Bumpsted',
      lastMessage: 'Gym?',
      time: '17:20',
    },
    {
      id: 6,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-12.png',
      status: 'online',
      userName: 'Lee K',
      lastMessage: 'No',
      time: '17:02',
    },
    {
      id: 7,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-13.png',
      status: 'offline',
      userName: 'Peter Braski',
      lastMessage: 'Cya later',
      time: '16:40',
    },
    {
      id: 8,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-1.png',
      status: 'offline',
      userName: 'Soulja Boy',
      lastMessage: 'Nothing',
      time: '16:32',
    },
    {
      id: 9,
      pfp: 'https://hype5-react.vercel.app/images/avatars/Vector-15.png',
      status: 'offline',
      userName: 'Trisha Maw',
      lastMessage: 'Lets make a deal',
      time: '16:07',
    },

  ];

  return (
    <div className="chatitems-container">

      {chatData.map((chat) => (
        <Link key={chat.id} to={`/messages/${chat.id}`} className="chatitem-link">
          <div className="chatitem">
            <div className="pfp">
              <img src={chat.pfp} alt={`${chat.userName}'s avatar`} />
            </div>
            <div className={`status ${chat.status}`}></div>
            <div className="user-name">{chat.userName}</div>
            <div className="last-message">{chat.lastMessage}</div>
            <div className="time">{chat.time}</div>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default ChatItem;