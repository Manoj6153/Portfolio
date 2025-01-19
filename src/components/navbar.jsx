import React from 'react'
import './navbar.css'
import logo from '.././assets/logo.svg'
import { Link } from 'react-scroll'
import arrow from '.././assets/arrow.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className='logo-name'>
        <img src={logo} alt='logo'className='logo'/>
        <h1 className='logo'>MANOJ B</h1>
        <img src={arrow} alt='>' className='arrow'/>
      </div>
      <div className="menu">
        <Link className="menuItem" activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700}>About</Link>
        <Link className="menuItem" activeClass='active' to='page' spy={true} smooth={true} offset={-100} duration={700}>Skills</Link>
        <Link className="menuItem" activeClass='active' to='page2' spy={true} smooth={true} offset={-100} duration={700}>Laboratory</Link>
        <Link className="menuItem" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={700}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar