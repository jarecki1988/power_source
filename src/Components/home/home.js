import React from 'react';
import './home.css';


class Home extends React.Component {
  render(){
  return (
    <div className="home">
      
        <h1>POWER SOURCE: </h1>
          <p>is showing how much<br/>
          of Your space ship and lightsword<br/>
          has energy we can use yet, <br/>
          check the power level left, <br/>
          click <a href="/status" id="home__link"><span>STATUS</span></a> to see.</p>
      
    <div className="home__section">
      <div className="home__article">
        <strong>The Millennium Falcon </strong>original designation YT-1300 492727ZED, was a Corellian YT-1300f light freighter most famously used by the smugglers Han Solo and Chewbacca during the Galactic Civil War. In the time following the Battle of Endor, Imperial turncoat Ralsius Paldora noted that 2.2 out of every 300 stormtroopers were aware of the Falcon's existence.[38]
        <br/><br/>
        <strong>Its aged appearance </strong>belied numerous advanced modifications to boost the ship's speed, weapons, and shield, including a hyperdrive engine among the fastest in the entire galaxy, enabling it to outrun Imperial Star Destroyers. It included sensor-proof smuggling compartments, which were used during the rescue of Princess Leia Organa in 0 BBY to evade Imperial stormtroopers.[1] Afterwards, the Millennium Falcon saw further action when Solo chose to join the Rebels during the Battle of Yavin, where it was able to sneak up and fire on Darth Vader's TIE Advanced, allowing Luke Skywalker to fire the proton torpedo that destroyed the Death Star.
        <br/><br/>
        <strong>The lightsaber</strong> also referred to as a laser sword by those who were unfamiliar with it, was a distinctive weapon, the very image of which was inextricably bound with the mythos of the Jedi Order and their polar opposites, the Sith. The lightsaber also became synonymous with the Jedi Order's values to uphold peace and justice throughout the galaxy. This perception endured, despite the many conflicts with lightsaber-wielding Sith and Dark Jedi.
        <br/><br/>
        <strong>The weapon </strong>consisted of a blade of pure plasma emitted from the hilt and suspended in a force containment field. The field contained the immense heat of the plasma, protecting the wielder, and allowed the blade to keep its shape. The hilt was almost always self-fabricated by the wielder to match his or her specific needs, preferences and style. The hilt was also built similarly to his or her master's lightsaber as a mark of respect. 
        <br/><br/>
        <strong> Due to </strong>the weightlessness of plasma and the strong gyroscopic effect generated by it, lightsabers required a great deal of strength and dexterity to wield, and it was extremely difficult—and dangerous—for the untrained to attempt using. 
        <br/><br/>
        <strong>Power control</strong> is very impornat to not ramain without energy, so check frequiently how much Your space ship and lightsword has energy left to be ready plug into <strong>power source </strong>on time. <strong>Click</strong> on each item to see their value of power left.
      </div>
    </div>
      <footer>
        Copyright all reserved 2019.
      </footer>
  </div>
  );
}
}
export default Home;