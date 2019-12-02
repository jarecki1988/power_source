import React from 'react';
import falcon from "../../Assets/Images/falcon2.png";
import Lightsaber from "../../Assets/Images/lightsaber2.png";
import Random from '../Random/random'






class Status extends React.Component {
  constructor(props){
    super(props);
    this.state = {border: '2px solid gray'};
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
        <div className="status__space">
            <h6><Random/> KV </h6>
              <img className="status__falcon" src={falcon} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick}></img>
              <img className="status__light" src={Lightsaber} alt="falcon" style={{border: this.state.border}} onClick={this.handleClick}></img>
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