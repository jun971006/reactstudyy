import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import LoginPage from '../src/components/users/Userlogin'
import LandingPage from '../src/components/landing/Landing'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/login' component={LoginPage}/>
      
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
