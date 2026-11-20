import './NavBarStyle.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
    <nav>
        <a className="navlogo" href="/"> gperry.live </a>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/garage'>Garage</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/photos'>Photos</Link>
        </div>
    </nav>       
    )
}

export default NavBar