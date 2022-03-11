import './Login.css'

import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, password);
  }


  return (
    <div className='ui container'>
    <form onSubmit={handleSubmit} className="ui form">
    <h2 className="ui center aligned icon header" style={{marginTop: '1rem'}}>
    <i className="user circle outline icon"></i>
      Login
    </h2>
  <div className="field">
      <div className="ui pointing below blue label">
      Email
    </div>
    <input type="email" name="first-name" placeholder="Email" onChange={e=> setEmail(e.target.value)} value={email}/>
  </div>
  <div className="field">
  <div className="ui pointing below red label">
      Password
    </div>
    <input type="password" name="last-name" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
  </div>
  <button className="ui primary button" type="submit">Login</button>
</form>
</div>
  )
}

export default Login