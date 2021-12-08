import React, { useState, useContext } from "react";
import { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "@material-ui/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { OpenResContext } from "./contexts/OpenResContext";
import useToggle from "../hooks/useToggle";

const styles = {
  window: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "200px",
    minHeight: "100px",
    backgroundColor: "white",
    borderRadius: "10px",
    userSelect: "none",
    cursor: "default",

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
    margin: "0",
    zIndex: "2",
    padding: "10px",
    userSelect: "none",
  },
  buttonMark: {
    zIndex: "100",
    color: "black",
    padding: "0",
    margin: "0",
    border: "2px solid black",
    borderRadius: "3px",
    margin: "1rem",
    padding: "0.1rem 0.4rem",
    fontSize: "1rem",
    boxShadow: "rgba(100, 100, 111, 0.6) 0px 3px 9px 0px",
    transition: "0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
};

function MapMarker({ index, coordinates, markData, classes }) {
  const { setOpenedRes } = useContext(OpenResContext);
  const [isOpen, toggleIsOpen] = useToggle(false);

  const date = new Date(markData.dateRes);
  const shownDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return (
    <Marker
      style={{ cursor: "pointer" }}
      key={index}
      id={index}
      coordinates={coordinates}
      anchor="bottom"
    >
      {isOpen ? (
        <div className={classes.window}>
          <div>
            <h3>מספר הזמנה: {markData.resId}</h3>
            <p>מיקום מדוייק: {markData.fullAdress || "לא התווסף"}</p>
            <p>פלאפון : {markData.phoneRes}</p>
            <p>תאריך: {shownDate}</p>

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
                className={classes.buttonMark}
                onClick={() => setOpenedRes(markData.resId)}
              >
                עוד
              </h2>
            </Link>
            <h2
              style={{ color: "red", borderColor: "red" }}
              className={classes.buttonMark}
              onClick={() => {
                toggleIsOpen();
              }}
            >
              סגור
            </h2>
          </div>
        </div>
      ) : (
        <p
          onClick={() => {
            toggleIsOpen();
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
