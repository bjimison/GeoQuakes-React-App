import React, { Component } from "react";

class Earthquakes extends Component {
  render() {
    let earthquakes = this.props.earthquakes.map((earthquake, index) => {
      return (
        <p key={index} className="titles">
          {earthquake.properties.title}
        </p>
      );
    });
    return <div>{earthquakes}</div>;
  }
}

export default Earthquakes;
