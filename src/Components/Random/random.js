import React from 'react';


class Random extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { random: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick = () => {
    var min = 1;
    var max = 7;
    var rand =  min + (Math.floor(Math.random() * (max-min)));
    this.setState ({random : rand})
 }
  render() {
    return (
      <div className="random">
        <div onClick={this.handleClick}>
            {this.state.random}
            </div>
          </div>

    );
  }
}

export default Random
