import React,{useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import {DiGithubBadge} from 'react-icons/di'
import './Navbar.css'
const Navbar = () => {
    const [click,setClick] = useState(false);

    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Fragment>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <DiGithubBadge className='navbar-icon'></DiGithubBadge>
                    AKASH
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>About Me</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/education' className='nav-links' onClick={closeMobileMenu}>Education</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>Skills</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contactme' className='nav-links' onClick={closeMobileMenu}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </Fragment>
    )
}

export default Navbar

