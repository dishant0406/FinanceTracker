import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup'
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App