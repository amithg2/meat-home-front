import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import styles from './styles/StatisticsStyles'
function Statistics({ classes, reservations }) {
  const [enters, setEnters] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/admin", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      if (data.statistics) {
        setEnters(data.statistics[0].enters);
      }
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
