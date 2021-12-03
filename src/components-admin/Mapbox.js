import React, { useRef, useEffect, useState } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { withStyles } from "@material-ui/styles";
const styles = {
  mapbox: {
    backgroundColor: "lightgreen",
    width: "100%",
    height: "40vh",
    "& a": {
      color: "white",
    },
    "& button": {
      display: "none",
    },
  },
  map: {
    width: "100%",
    height: "100%",
  },
};

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
          <Marker
            style={{ cursor: "pointer" }}
            key={index}
            coordinates={e.geometry.coordinates}
            anchor="bottom"
          >
              <p style={{ fontSize: "1.4em" }}>&#128205;</p>
            
          </Marker>
        );
      });
      return newArr;
    }
  };
  return (
    <div className={classes.mapbox}>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
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
