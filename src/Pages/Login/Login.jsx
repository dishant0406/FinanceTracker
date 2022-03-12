import './Login.css'

import React, {useState} from 'react';
import { useLogin } from '../../Hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, isPending} = useLogin();

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(email, password);
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
  {!isPending  && <button className="ui primary button" type="submit">Login</button>}
  {isPending && <button className="ui primary elastic loading button" disabled>Loading</button>}
  { error && <div className="ui negative message">
                <i className="close icon"></i>
                <div className="header">
                  Try Again, There is a Error! 
                </div>
                <p>{error}</p>
            </div>}
</form>
</div>
  )
}

export default Login