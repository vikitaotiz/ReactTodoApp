import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            Navbar
          <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About Us</Link></li>   
          </ul>
        </div>
    )
}

export default Navbar
