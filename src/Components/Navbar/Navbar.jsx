import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to='/messages'><i className="fa-regular fa-envelope"></i></Link>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-sliders"></i>
        <i className="fa-solid fa-door-open"></i>
      </nav>
    </div>
  );
};

export default Navbar;