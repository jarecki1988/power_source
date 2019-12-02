import React from 'react';
import falcon from "../../Assets/Images/falcon2.png";
import Lightsaber from "../../Assets/Images/lightsaber2.png";
import Random from '../Random/random'






class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = {border: '2px solid gray'};
    this.state = {random: 'KV'}
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.randomNum = this.randomNum.bind(this);
  }


 handleClick() {

    this.setState(state => 
      ({border: '2px solid green'})) 
      alert ('Kliknięto w falcon!');
  }
  handleClick2() {

    this.setState(state => 
      ({border: '2px solid lightgreen'}))
      alert('Kliknięto w lightsword!');
      
  }
  randomNum() {
    this.setState(state => 
      this.random = (Math.random()*700/100).toFixed(1))
    }
  

  render() {
  return (
    <div className="status">
      <h1>TOTAL POWER:{} KV </h1>
        <div className="status__space">
        <h6><output>{[this.random,this.state.random]} </output></h6>
               <img className="status__falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.randomNum} ></img>
              <img className="status__light" src={Lightsaber} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick2}></img>
            <h6><Random/> KV </h6>
        </div>
      <footer>
        Copyright all reserved 2019.
      </footer>
    </div>
  );
}
}
export default Status;