import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <img src="/images/beers.png" alt="" />
          <Link to="/beers">
            <h1>All Beer</h1>
          </Link>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro modi
            molestiae autem ad, vitae fugiat at maxime vel similique explicabo
            voluptatum, quibusdam distinctio assumenda dolores necessitatibus
            molestias, ipsa atque ex.
          </p>
        </div>
        <div className="container">
          <img src="/images/random-beer.png" alt="" />
          <Link to="/random-beer">
            <h1>Random Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            aliquam molestiae ipsum alias velit eum saepe minima a, non, odio
            aspernatur est eius! Molestias fugiat aspernatur nostrum nesciunt
            consequuntur ad!
          </p>
        </div>
        <div className="container">
          <img src="/images/new-beer.png" alt="" />
          <Link to="/new-beer">
            <h1>New Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            numquam at nobis blanditiis laudantium perferendis rerum
            reprehenderit necessitatibus nihil corporis temporibus ullam, neque
            ab aliquam magni qui laborum iste sapiente.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
