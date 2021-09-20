import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h3>TODO</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>   
      </ul>
    </div>
  );
}

export default Navbar;
