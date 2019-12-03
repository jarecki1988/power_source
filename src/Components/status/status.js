import React from "react";
import falcon from "../../Assets/Images/falcon2.png";
import Lightsaber from "../../Assets/Images/lightsaber2.png";
import './status.css';




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
    this.randomFalcon = (Math.random()*7).toFixed(0)
      this.setState(state => 
      ({border: '2px solid lightgreen'}))
       
    }

  handleClick2() {
    this.randomSword = (Math.random()*7).toFixed(0);
      this.setState(state => {
      return ({border2: '2px solid lightgreen'})
    }
    )};     

  render() {
    return (
      <div className="status">
  <h1>TOTAL POWER: {(this.randomFalcon * 1 + this.randomSword * 1)}KV</h1>
  <p> Click on pictures to see current value of KV </p>
          <div className="status__space">
              <figure>
                <img id="status__falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick} ></img>
                <img id="status__light" src={Lightsaber} alt="light" style={{border: this.state.border2}} onClick={this.handleClick2}></img>
              </figure>

              <div className="status__description">
                {[this.randomFalcon,this.state.randomFalcon]} KV
               </div>

              <div className="status__description">
                {[this.randomSword]} KV
              </div>
              
          </div>

          <footer>
            Copyright all reserved 2019.
          </footer>

        </div>  
    );
  }
}

export default Status;
