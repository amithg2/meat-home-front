import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
const styles = {
  statistics: {
    width: "100%",
    height: "40vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "1rem",
    textAlign: "center",
  },
  card: {
    width: "30%",
    height: "10vh",
    border: "1px solid black",
    margin: "0.3rem",
    background: "lightgrey",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  },
};


function Statistics({ classes, reservations }) {
  const [enters, setEnters] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/admin");

      setEnters(data.statistics[0].enters);
    };
    getData();
  }, []);

  let totalCounter = 0;
  const showNumOfPplTotal = () => {
    if (reservations.length) {
      reservations.forEach((e) => {
        if (e.numOfPeopleRes) {
          return (totalCounter += parseInt(e.numOfPeopleRes));
        }
      });
      return totalCounter;
    }
  };
  const showApproved = () => {
    let approvedCounter = 0;
    if (reservations.length) {
      reservations.forEach((e) => {
        if (e.isApproved) approvedCounter++;
      });
    }
    return approvedCounter;
  };
  const showAvgNumOfPpl = () => {
    const avg = Math.round(totalCounter / reservations.length);
    return avg;
  };
  const showResEntersPrecent = () =>
    Math.round((reservations.length / enters) * 100);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>סטטיסטיקה :</h1>
      <div className={classes.statistics}>
        <div className={classes.card}>
          סך הכל אנשים בכל הההזמנות : {showNumOfPplTotal()}
        </div>
        <div className={classes.card}>
          מספר הזמנות שאושרו : {showApproved()}
        </div>
        <div className={classes.card}>מספר הזמנות : {reservations.length}</div>

        <div className={classes.card}>
          ממוצע אנשים לאירוע : {showAvgNumOfPpl()}
        </div>
        <div className={classes.card}>כניסות לאתר :{enters}</div>
        <div className={classes.card}>
          אחוז מזמינים מתוך נכנסים לאתר :{showResEntersPrecent()}
        </div>
      </div>
    </>
  );
}

export default withStyles(styles)(Statistics);
