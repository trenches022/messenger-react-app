import './CallsList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CallsList = () => {

  const calls = [
    {
      name: 'Lee K',
      date: '6 december, 2024',
      time: '23:12',
      isAccepted: true,
    },
    {
      name: 'John Bow',
      date: '2 december, 2024',
      time: '12:01',
      isAccepted: false,
    },
    {
      name: 'Rock Lee',
      date: '1 december, 2024',
      time: '09:30',
      isAccepted: true,
    },
  ];

  return (
    <div className="calls-list">
      {calls.map((call) => (
      <>
        <div className="call-item">
          <div className="call-name">
          <h3>{call.name}</h3>
          </div>
          <div className="call-date">
          <p>{call.date}, {call.time} {call.isAccepted ? <i className="fa-solid fa-phone"></i> : <i className="fa-solid fa-phone-slash" style={{color: 'red'}}></i>}</p>
          </div>
        </div>
      </>
       
      ))}
    </div>
  )
}

export default CallsList;