import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(false);

  const handleClick = ()=>{
    if(mobilemenu){
      setMobileMenu(false);
    }else{
      setMobileMenu(true);
    }
  }

  return (
    <header>
      <div id="brand"><Link to="/">Finance Tracker</Link></div>
      <nav>
        <ul>
          <li><Link exact to="/"><div className="ui primary button" bis_skin_checked="1">Home</div></Link></li>
          <li id="login"><Link to="/login" >Login</Link></li>
          <li id="signup"><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <div id="hamburger-icon" className={mobilemenu ? 'open' : ''} onClick={()=> handleClick()} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <ul className="mobile-menu">
          <li ><Link exact to="/" className='ui primary button'>Home</Link></li>
          <li id="login"><Link to="/login" >Login</Link></li>
          <li id="signup"><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar