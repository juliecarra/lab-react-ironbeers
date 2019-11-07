import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ListBeers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: []
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      console.log(res);
      this.setState({ beers: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { beers } = this.state;
    return (
      <div className="ListBeers">
        <nav>
          <Link to="/">
            <img
              src="https://icon-library.net/images/home-logo-icon/home-logo-icon-0.jpg"
              alt=""
              style={{ width: "12%" }}
            />
          </Link>
        </nav>
        {beers.map(beer => (
          <div key={beer._id} className="allbeers__container">
            <Link to={`/${beer._id}`}>
              <img src={beer.image_url} alt="" style={{ width: "100px" }} />
            </Link>

            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <strong>Created by:</strong>
            <p>{beer.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ListBeers;
