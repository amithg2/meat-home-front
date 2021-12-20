import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./MapMarker";
import { withStyles } from "@material-ui/styles";
import styles from './styles/MapboxStyles'

import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
ReactMapboxGl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
function Mapbox(props) {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYW1pdGhhZ2FnIiwiYSI6ImNrdWlqZXVodzBhbDUyeHJ2OHVpYjE0NDgifQ.a6AWc_2L-M72yQChwYVsQA",
  });
  const { classes, reservations } = props;

  const makeMarkers = (arr) => {
    if (arr) {
      const newArr = arr.map((e, index) => {
        return (
          <MapMarker
            coordinates={e.geometry.coordinates}
            index={index}
            key={index}
            markData={e}
          />
        );
      });
      return newArr;
    }
  };
  return (
    <div className={classes.mapbox}>
        
      <Map
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={[34.9, 31.8]}
        zoom={[8]}
      >
        {makeMarkers(reservations)}
      </Map>
    </div>
  );
}

export default withStyles(styles)(Mapbox);
