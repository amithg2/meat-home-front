import React, { useState, useContext } from "react";
import { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "@material-ui/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { OpenResContext } from "./contexts/OpenResContext";

const styles = {
  window: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "200px",
    minHeight: "100px",
    backgroundColor: "white",
    borderRadius: "10px",
    userSelect: "none",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    zIndex: "40",
    "& h3": {
      textAlign: "center",
      margin: "0",
    },
    "& p": {
      margin: "0",
      paddingRight: "10px",
    },
  },

  point: {
    fontSize: "1.4em",
    zIndex: "2",
    padding: "10px",
    userSelect: "none",
  },
};

function MapMarker({ index, coordinates, markData, classes }) {
  const { setOpenedRes } = useContext(OpenResContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Marker
      style={{ cursor: "pointer" }}
      key={index}
      id={index}
      coordinates={coordinates}
      anchor="bottom"
    >
      {isOpen ? (
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classes.window}
        >
          <div>
            <h3>מספר הזמנה: {markData.resId}</h3>
            <p>מיקום מדוייק :</p>
            <p>פלאפון : {markData.phoneRes}</p>
            <p>תאריך: {markData.dateRes}</p>

            {markData.isAproved ? (
              <b>
                <p>אושרה</p>
              </b>
            ) : (
              <b>
                <p>לא אושרה</p>
              </b>
            )}
          </div>
          <div>
            <Link
              activeClass="active"
              to={markData.resId.toString()}
              spy={true}
              smooth={true}
              duration={500}
            >
              <h2
                style={{
                  zIndex: "100",
                  color: "black",
                  padding: "0",
                  margin: "0",
                  border: "2px solid black",
                  borderRadius: "3px",
                  margin: "1rem",
                  padding: "0.5rem",
                }}
                onClick={() =>setOpenedRes(markData.resId)}
              >
                עוד
              </h2>
            </Link>
          </div>
        </div>
      ) : (
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classes.point}
        >
          &#128205;
        </p>
      )}
    </Marker>
  );
}

export default withStyles(styles)(MapMarker);
