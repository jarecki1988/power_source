import React from 'react';
import falcon from "../../../src/falcon2.png";
import Lightsaber from "../../../src/lightsaber2.png";


let random1 = Math.floor(Math.random()*7);
let random2 = Math.floor(Math.random()*7);
let value = random1 + random2;




const Status = () => {
  return (
    <div className="status">
     <h1>TOTAL POWER:{value} KV </h1>
     <div className="spacer">
       <figure>
     <img className="falcon" src={falcon} alt="falcon" ></img>
     <figurecaption>{random1} KV </figurecaption>
     </figure>
     <figure>
     <img className="light" src={Lightsaber} alt="falcon" ></img>
     <figurecaption>{random2} KV </figurecaption>
     </figure>
     </div>
     
     <footer>Copyright all reserved 2019</footer>
    </div>
  );
}

export default Status;