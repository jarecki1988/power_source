import React from 'react';
import falcon from "../../Assets/Images/falcon2.png";
import Lightsaber from "../../Assets/Images/lightsaber2.png";



class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = ({border: '2px solid gray'})
    this.state = {random: '0KV'};
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    
  }

  handleClick() {
    this.setState(state => 
      
      ({border: '2px solid lightgreen'}))
      this.random = (Math.random()*700/100).toFixed(1);
      
  }
  handleClick2() {
    this.setState(state => 
      
      ({border: '2px solid lightgreen'}))
      this.random = (Math.random()*700/100).toFixed(1);
      
  }
 

  render() {
    return (
      <div className="status">
  <h1>TOTAL POWER: { this.total } KV </h1>
          <div className="status__space">
              <output >{[this.random, this.state.random]}</output>
              <img id="status__falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick} ></img>
              
              <img id="status__light" src={Lightsaber} alt="flight" style={{border: this.state.border}} onClick={this.handleClick2}></img>
              <output >{[this.random,this.state.random]}</output>
              
              
          </div>

          <footer>
            Copyright all reserved 2019.
          </footer>

        </div>  
    );
  }
}

export default Status;