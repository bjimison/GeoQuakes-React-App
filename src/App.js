import React, { Component } from "react";
import EarthquakeContainer from "./components/EarthquakeContainer";
import MapContainer from "./components/MapContainer";
import EarthquakeModel from "./models/Earthquakes";

class App extends Component {
  state = {
    quakes: []
  };

  componentDidMount() {
    EarthquakeModel.all().then(res => {
      this.setState({ quakes: res.data.features });
    });
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer quakes={this.state.quakes} />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past month: </h1>
          <EarthquakeContainer quakes={this.state.quakes} />
        </div>
      </div>
    );
  }
}

export default App;
