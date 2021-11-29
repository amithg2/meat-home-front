import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import Mapbox from "./Mapbox";
import ReservationsList from "./ReservationsList";
import Statistics from "./Statistics";
import axios from "axios";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = {
  main: {
    width: "80%",
    minHeight: "100vh",
    margin: "auto",
  },
};

function Admin(props) {
  const [reservations, setReservations] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/admin");
      setReservations(data);
    }
    getData()
  },[]);

  const { classes } = props;
  return (
    <div className={classes.main}>
      <Mapbox reservations={reservations}/>
      <ReservationsList reservations={reservations} />
      <Statistics />
    </div>
  );
}

export default withStyles(styles)(Admin);
