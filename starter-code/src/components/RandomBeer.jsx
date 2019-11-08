import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomBeer: []
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      this.setState({ randomBeer: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { randomBeer } = this.state;
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://icon-library.net/images/home-logo-icon/home-logo-icon-0.jpg"
              alt=""
              style={{ width: "12%" }}
            />
          </Link>
        </nav>
        <img src={randomBeer.image_url} alt="" width="12%" />
        <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline}</h2>
        <h3>{randomBeer.first_brewed}</h3>
        <h3>{randomBeer.attenuation_level}</h3>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
