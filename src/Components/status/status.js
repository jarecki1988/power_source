import React from 'react';
import falcon from "../../../src/falcon2.png";
import Lightsaber from "../../../src/lightsaber2.png";
import Random from '../Random/random'






class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = {border: '2px solid hidden'};
    this.handleClick = this.handleClick.bind(this);
  }


 handleClick() {

    this.setState(state => 
      ({border: '2px solid green'})) 
  }

  render() {
  return (
    <div className="status">
      <h1>TOTAL POWER:{} KV </h1>
        <div className="space">
            <h6><Random/> KV </h6>
              <img className="falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick}></img>
              <img className="light" src={Lightsaber} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick}></img>
            <h6><Random/> KV </h6>
        </div>
      <footer>
        <h5>Copyright all reserved 2019.</h5>
      </footer>
    </div>
  );
}
}
export default Status;