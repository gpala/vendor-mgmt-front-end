import React from 'react';
import VendorServices from './components/VendorServices';
import Login from './components/Login';
import Home from './components/Home'
import AuthContext from './components/context'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import './App.css';

function App() {

  return (
    <AuthContext.Provider>
      <Router>
            <div>

              <Switch>
                <Route path="/services">
                  <VendorServices />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>

          </div>
          </Router>
    </AuthContext.Provider>
    
    
  );
}

export default App;
