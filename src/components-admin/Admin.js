import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Mapbox from "./Mapbox";
import ReservationsList from "./ReservationsList";
import Statistics from "./Statistics";
import axios from "axios";
import { OpenResContext } from "./contexts/OpenResContext";
import sizes from "../styles/sizes";

const styles = {
  main: {
    width: "80%",
    minHeight: "100vh",
    margin: "auto",
    "& .inside": {
      padding: "0",
      margin: "1rem",
      justifyContent: "center",
      textAlign: "center",
    },
    [sizes.down("md")]: {
      width: "100%",
    },
  },
  titles: {
    fontSize: "0.7rem",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    height:'4rem',
    "& h2": {
      cursor: "pointer",
      transition: "0.5s ease",
    },
  },
  curTitle: {
    fontSize: "1.1rem",
    color: "black",
    textDecoration: "underline",
  },
};

function Admin(props) {
  const [reservations, setReservations] = useState("");
  const [reservationsPast, setReservationsPast] = useState("");
  const [reservationsFuture, setReservationsFuture] = useState("");
  const [curRes, setCurRes] = useState("all");
  const [openedRes, setOpenedRes] = useState("");
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/admin", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      setIsAuth(data.isAuth);
      if (data.isAuth) {
        const today = await new Date().valueOf();
        const past = data.data.filter((e) => e.date < today);
        const future = data.data.filter((e) => e.date > today);
        setReservationsPast(past);
        setReservations(data.data);
        setReservationsFuture(future);
      }
    };
    getData();
  }, []);

  const showChoose = (cur) => {
    switch (cur) {
      case "all":
        return (
          <div>
            <Mapbox reservations={reservations} />
            <ReservationsList reservations={reservations} />
            <Statistics reservations={reservations} />
          </div>
        );
      case "past":
        return (
          <div>
            <Mapbox reservations={reservationsPast} />
            <ReservationsList reservations={reservationsPast} />
            <Statistics reservations={reservationsPast} />
          </div>
        );
      case "future":
        return (
          <>
            <Mapbox reservations={reservationsFuture} />
            <ReservationsList reservations={reservationsFuture} />
            <Statistics reservations={reservationsFuture} />
          </>
        );
      default:
        return <h1>תקלה מספר 1</h1>;
    }
  };


  const { classes } = props;
  if (isAuth) {
    return (
      <div className={classes.main}>
        <OpenResContext.Provider value={{ openedRes, setOpenedRes }}>
          <div>
            <div className={classes.titles}>
              <h2
                className={`${curRes === "all" && classes.curTitle}`}
                onClick={() => setCurRes("all")}
              >
                כל ההזמנות
              </h2>
              <h2
                className={`${curRes === "past" && classes.curTitle}`}
                onClick={() => setCurRes("past")}
              >
                הזמנות מהעבר
              </h2>

              <h2
                className={`${curRes === "future" && classes.curTitle}`}
                onClick={() => setCurRes("future")}
              >
                הזמנות 
              </h2>
            </div>
            {showChoose(curRes)}
          </div>
        </OpenResContext.Provider>
      </div>
    );
  }
  return <Navigate to="/" />;
}

export default withStyles(styles)(Admin);
