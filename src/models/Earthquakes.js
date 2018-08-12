import axios from "axios";
let center =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

class EarthquakeModel {
  static all() {
    let request = axios.get(center);
    return request;
  }
}

export default EarthquakeModel;
