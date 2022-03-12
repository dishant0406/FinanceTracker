import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup'
import Navbar from './Components/Navbar/Navbar';
import { useAuthContext } from './Hooks/useAuthContext';

const App = () => {
  const {authIsReady, user} = useAuthContext();
  return (
    <div className="App">
    {!authIsReady && (
      <div className="ui container">
      <div className="ui active dimmer">
        <div className="ui indeterminate text loader">Loading...</div>
      </div>
      <p></p>
    </div>
    )}

    {authIsReady && (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        {!user && <Redirect to='/login'/>}
        {user && <Home/>}
      </Route>
      <Route path='/login'>
        {user && <Redirect to='/'/>}
        {!user && <Login/>}
      </Route>
      <Route path='/signup'>
        {user && <Redirect to='/'/>}
        {!user && <Signup/>}
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
    )}
    </div>
  )
}

export default App