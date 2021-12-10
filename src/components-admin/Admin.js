import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Mapbox from "./Mapbox";
import ReservationsList from "./ReservationsList";
import Statistics from "./Statistics";
import axios from "axios";
import { OpenResContext } from "./contexts/OpenResContext";

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
  },
  titles: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    "& h2": {
      color: "gray",
      cursor: "pointer",
      fontSize: "1.45rem",
      transition: "0.5s ease",
    },
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
      })
      
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

  const showTitles = (cur) => {
    return (
      <div className={classes.titles}>
        {cur === "all" ? (
          <h2
            style={{
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "underline",
            }}
            onClick={() => setCurRes("all")}
          >
            כל ההזמנות
          </h2>
        ) : (
          <h2 onClick={() => setCurRes("all")}>כל ההזמנות</h2>
        )}
        {cur === "past" ? (
          <h2
            style={{
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "underline",
            }}
            onClick={() => setCurRes("past")}
          >
            הזמנות מהעבר
          </h2>
        ) : (
          <h2 onClick={() => setCurRes("past")}>הזמנות מהעבר</h2>
        )}
        {cur === "future" ? (
          <h2
            style={{
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "underline",
            }}
            onClick={() => setCurRes("future")}
          >
            הזמנות
          </h2>
        ) : (
          <h2 onClick={() => setCurRes("future")}>הזמנות</h2>
        )}
      </div>
    );
  };
  const { classes } = props;
  if (isAuth) {
    return (
      <div className={classes.main}>
        <OpenResContext.Provider value={{ openedRes, setOpenedRes }}>
          <div>
            {showTitles(curRes)}
            {showChoose(curRes)}
          </div>
        </OpenResContext.Provider>
      </div>
    );
  }
    return <Navigate to="/" />;
    
}

export default withStyles(styles)(Admin);
