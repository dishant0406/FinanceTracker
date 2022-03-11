import './Signup.css'

import React, {useState} from 'react';
import { useSignup } from '../../Hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const {signup, isPending, error} = useSignup();

  const selectShortlistedApplicant = (e) => {
    const checked = e.target.checked;
    if (checked) {
     setChecked(true);
    } else {
     setChecked(false);
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    signup(email, password, name);
  }
  
  return (
    <div className='ui container'>
    <form onSubmit={handleSubmit} className="ui form">
    <h2 className="ui center aligned icon header" style={{marginTop: '1rem'}}>
    <i className="user circle icon"></i>
      SignUp
    </h2>
    <div className="field">
      <div className="ui pointing below blue label">
      Full Name
    </div>
    <input type="text" name="first-name" placeholder="Name" onChange={e=> setName(e.target.value)} value={name}/>
  </div>
  <div className="two fields">
  <div className="field">
      <div className="ui pointing below blue label">
      Email
    </div>
    <input type="email" name="email" placeholder="Email" onChange={e=> setEmail(e.target.value)} value={email}/>
  </div>
  <div className="field">
  <div className="ui pointing below red label">
      Password
    </div>
    <input type="password" name="last-name" placeholder="Password" onChange={e=> setPassword(e.target.value)} value={password}/>
  </div>
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabIndex="0" onClick={(e) => {selectShortlistedApplicant(e)}}/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  {!checked && <button className="ui primary button" disabled type="submit">SignUp</button>}
  {!isPending && checked && <button className="ui primary button" type="submit">SignUp</button>}
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

export default Signup