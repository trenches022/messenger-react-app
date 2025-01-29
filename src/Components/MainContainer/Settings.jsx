import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-profile">
        <img src="https://hype5-react.vercel.app/images/avatars/Vector-10.png" alt="profile picture" />
        <p className='username'>Chatter User</p>
        <h3>Information</h3>
        <h4>Name: Chatter User</h4>
        <h4>Email: example@example.com</h4>
        <h4>Phone: +1 234 23456789</h4>
        <h4>Address: Chicago, USA</h4>
      </div>
      <div className="theme-toggle">
        <button className='switchtheme-btn'>Switch theme</button>
      </div>
    </div>
  )
}

export default Settings;