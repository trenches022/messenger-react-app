import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true)
  }

  return (
  <>
    <div className="navbar">
      <nav>
        <Link to='/messages'><i className="fa-regular fa-envelope"></i></Link>
        <Link to='/calls'><i className="fa-solid fa-phone"></i></Link>
        <Link to='/notifications'><i className="fa-solid fa-bell"></i></Link>
        <Link to='/settings'><i className="fa-solid fa-sliders"></i></Link>
        <Link to='/logout' onClick={handleLogout}><i className="fa-solid fa-door-open"></i></Link>
      </nav>
    </div>
    {isModalOpen === true && <Modal 
      onConfirm={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
    />}
  </>
  );
};

export default Navbar;