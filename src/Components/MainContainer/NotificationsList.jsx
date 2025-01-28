import './NotificationsList.css';

const NotificationsList = () => {

  const notifications = [
    {
      name: 'Chris Travis',
      action: 'Added your contact',
      date: '2 hours ago',
    },
    {
      name: 'John Bow',
      action: 'Missed Call',
      date: '1 day ago',
    },
    {
      name: 'Peter Braski',
      action: 'Mentioned you in the group "Gym bros"',
      date: '2 days ago',
    },
]

  return (
    <div className="notifications-list">
      {notifications.map((notification) => (
        <>
          <div className="notification-item">
            <h3>{notification.name}</h3>
            <p>{notification.action}</p>
            <p>{notification.date}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default NotificationsList;