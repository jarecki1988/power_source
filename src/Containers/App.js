import React from 'react';
import './App.css';
import Home from '../Components/home/home';
import Status from '../Components/status/status';
import Logo from "../Assets/Images/Logo.png";
import { BrowserRouter as Router,Route,Link,NavLink } from 'react-router-dom';


class App extends React.Component {
  render() {
  return (
    <Router>
    <div className="app">
        <div className="app__nav">
        <img className="app__logo" src={Logo} alt='' width='60px' height="auto" ></img>
        <div className="app__gap"></div>
          <Link to="/" >Home</Link>
          <NavLink to="/status" activeClassName="active">Status</NavLink>
        </div>
    </div>
      <Route exact path="/" component={Home} />
      <Route path="/status" component={Status} />
    </Router>
  );
  }
  }
  

export default App;
