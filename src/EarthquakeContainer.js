import React, { Component } from "react";
import EarthquakeModel from "./models/Earthquakes";
import Earthquakes from "./Earthquakes";

class EarthquakeContainer extends Component {
  state = {
    earthquakes: []
  };

  fetchData = res => {
    EarthquakeModel.all().then(res => {
      this.setState({ earthquakes: res.data.features });
    });
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    return <Earthquakes earthquakes={this.state.earthquakes} />;
  }
}

export default EarthquakeContainer;
