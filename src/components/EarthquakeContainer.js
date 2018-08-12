import React, { Component } from "react";
import Earthquakes from "./Earthquakes";

class EarthquakeContainer extends Component {
  render() {
    let quakeList = this.props.quakes.map((quake, idx) => {
      return (
        <Earthquakes
          key={idx}
          mag={quake.properties.mag}
          title={quake.properties.title}
        />
      );
    });

    return (
      <div>
        <ul>{quakeList}</ul>
      </div>
    );
  }
}

export default EarthquakeContainer;
