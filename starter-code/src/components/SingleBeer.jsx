import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: []
    };
  }
  async componentDidMount() {
    try {
      let id = this.props.match.params._id;
      const res = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );

      console.log(res);

      this.setState({ beer: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { beer } = this.state;
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
        <img src={beer.image_url} alt="" width="12%" />
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <h3>{beer.first_brewed}</h3>
        <h3>{beer.attenuation_level}</h3>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;
