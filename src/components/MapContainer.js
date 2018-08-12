import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    let locations = this.props.quakes.map((quake, index) => (
      <Marker
        key={index}
        title={quake.properties.place}
        name={quake.properties.place}
        position={{
          lat: quake.geometry.coordinates[1],
          lng: quake.geometry.coordinates[0]
        }}
      />
    ));

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          initialCenter={{ lat: 37.78, lng: -122.44 }}
          style={{ width: "60%", height: "60%" }}
          zoom={3}
          onClick={this.onMapClicked}
        >
          {locations}
        </Map>
      </div>
    );
  }
}

// must export apiKey?
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer);
