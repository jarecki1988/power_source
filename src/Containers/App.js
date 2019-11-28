import React from 'react';
import './App.css';
import Home from '../Components/home/home';
import Status from '../Components/status/status';
import Logo from "../Logo.png"

class App extends React.Component {
  render() {
  return (
  <div className="nav">
    <img src={Logo} alt='' width='50px' height='auto'></img>
    <Home />
    <Status />
    
    </div>
  );
  }
  }
  

export default App;
