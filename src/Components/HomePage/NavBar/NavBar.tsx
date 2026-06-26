import './NavBarStyle.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
    <nav className='styles'>
        <a className="navlogo" href="#home"> gperry.live </a>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>Photos</Link>
            <Link to='/'>Guestbook</Link>
        </div>
    </nav>       
    )
}

export default NavBar