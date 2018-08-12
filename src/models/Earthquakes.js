import React from "react";
import axios from "axios";

class EarthquakeModel {
  static all() {
    let request = axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
    );
    return request;
  }
}

export default EarthquakeModel;
