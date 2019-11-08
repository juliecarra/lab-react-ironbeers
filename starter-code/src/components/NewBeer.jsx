import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NewBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          name: e.target.name.value,
          tagline: e.target.tagline.value,
          description: e.target.description.value,
          first_brewed: e.target.first_brewed.value,
          brewers_tips: e.target.brewers_tips.value,
          attenuation_level: e.target.attenuation_level.value,
          contributed_by: e.target.contributed_by.value
        }
      );
      // console.log(res);
      this.setState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
        message: res.data.message
      });
      //console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;
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

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            id="tagline"
            type="text"
            name="tagline"
            value={tagline}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            id="first_brewed"
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={this.handleChange}
          />
          <label htmlFor="brewers_tips"> Brewers Tips</label>
          <input
            id="brewers_tips"
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={this.handleChange}
          />
          <label htmlFor="attenuation_level"> Attenuation Level</label>
          <input
            id="attenuation_level"
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={this.handleChange}
          />
          <label htmlFor="contributed_by"> Contributed By</label>
          <input
            id="contributed_by"
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={this.handleChange}
          />
          <button>Add New</button>
        </form>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default NewBeer;
