import React from "react";
import falcon from "../../Assets/Images/falcon2.png";
import Lightsaber from "../../Assets/Images/lightsaber2.png";




class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = ({border: '2px solid gray'})
    this.state = ({border2: '2px solid gray'})
    this.state = {randomFalcon: 0}
    this.state = {randomSword: 0}
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    
  }

  handleClick() {
    this.setState(state => 
      ({border: '2px solid lightgreen'}))
      this.randomFalcon = (Math.random()*700/100).toFixed(1) 
    
  
      
      
  }
  handleClick2() {
    this.setState(state => 
      ({border2: '2px solid lightgreen'}));
      this.randomSword = (Math.random()*700/100).toFixed(1)
      
      
  }

  render() {
    return (
      <div className="status">
  <h1>TOTAL POWER: {} KV</h1>
  <p> Click on pictures to see current value of Kv </p>
          <div className="status__space">
              <span>{[this.randomFalcon,this.state.randomFalcon]} KV</span>
              <img id="status__falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick} ></img>
              
              <img id="status__light" src={Lightsaber} alt="flight" style={{border: this.state.border2}} onClick={this.handleClick2}></img>
              <span>{[this.randomSword,this.state.randomSword]} KV</span>
              
              
          </div>

          <footer>
            Copyright all reserved 2019.
          </footer>

        </div>  
    );
  }
}

export default Status;
