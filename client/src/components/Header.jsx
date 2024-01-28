import { Link } from 'react-router-dom'
import logo from '../assets/ndseLogoPrimary.png'


function Header() {




    return (
        <>
        <header>
            <img src={logo} alt="NSDE Logo" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              
                <a href="#">Vision</a>
                <a href="#">Project</a>
                <a href="#">Get Involved</a>
                <a href="#">News & Blog</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
                <a href="#">Events</a>
            </nav>
            <span>Language</span>
            <input type="search" name="" id="" />
        </header>
        </>
    )
}

export {Header}