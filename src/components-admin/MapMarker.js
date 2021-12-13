import React, { useContext } from "react";
import { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";
import { OpenResContext } from "./contexts/OpenResContext";
import useToggle from "../hooks/useToggle";
import styles from "./styles/MapMarkerStyles";
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
