
import React from 'react';
import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container d-flex align-items-center flex-column">
      <RegistrationForm />
       </div>
    </div>
  )
}

export default App;
