import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../../Hooks/useLogout'
import './Navbar.css'
import { useAuthContext } from '../../Hooks/useAuthContext'

const Navbar = () => {
  const [mobilemenu, setMobileMenu] = useState(false);
  
  const {user} = useAuthContext();
  const {logout} = useLogout();

  

  const handleClick = ()=>{
    if(mobilemenu){
      setMobileMenu(false);
    }else{
      setMobileMenu(true);
    }
  }

  

  return (
    <header>
      <div id="brand"><Link to="#">Finance Tracker</Link></div>
      <nav>
        {user===null ? <ul>
          <li id="login"><Link to="/login" >Login</Link></li>
          <li id="signup"><Link to="/signup">Signup</Link></li>
        </ul> : <ul>
        <li ><Link exact='true' to="/" className='ui block header'>{` Welcome ${user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}`}</Link></li>
          <li><Link exact='true' to="/"><div className="ui primary button" bis_skin_checked="1">Home</div></Link></li>
          <li id="login"><Link onClick={logout} to='#' >Logout</Link></li>
        </ul>}
      </nav>
      <div id="hamburger-icon" className={mobilemenu ? 'open' : ''} onClick={()=> handleClick()} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        
        {user===null ? <ul className="mobile-menu">
          <li id="login"><Link to="/login" >Login</Link></li>
          <li id="signup"><Link to="/signup">Signup</Link></li>
        </ul> : <ul className="mobile-menu">
          <li ><Link exact='true' to="/" className='ui block header'>{` Welcome ${user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)}`}</Link></li>
          <li ><Link exact='true' to="/" className='ui primary button'>Home</Link></li>
          <li id="login"><Link onClick={logout} to="#" >Logout</Link></li>
        </ul>}
      </div>
    </header>
  )
}

export default Navbar