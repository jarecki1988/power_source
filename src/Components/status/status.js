import React from 'react';
import falcon from "../../../src/falcon2.png";
import Lightsaber from "../../../src/lightsaber2.png";


let random = Math.floor(Math.random()*7);
let value = random;




const Status = () => {
  return (
    <div className="status">
     <h1>TOTAL POWER:{value} KV </h1>
     <div className="spacer">
     <img className="falcon" src={falcon} alt="falcon" ></img>
     <img className="light" src={Lightsaber} alt="falcon" ></img>
     </div>
     <footer>Copyright all reserved 2019</footer>
    </div>
  );
}

export default Status;