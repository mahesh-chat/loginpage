
import React from 'react';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import{BrowserRouter as Router , Switch , Route} from 'react-router-dom' ;
import {Link} from 'react-router-dom' ; 
import info from './components/info/info';

function App() {
  return (
    <div className="App">
      <Router>
       <Route exact path="/" component ={Header}/>
       < Route exact path="/"  component ={RegistrationForm}/>
       <Route  path="/info" component ={info}/>
  
    
      </Router>
    </div>
      

  )
}

export default App;
