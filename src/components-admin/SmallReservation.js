import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0.3em 0",
    cursor: "pointer",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  },
  approved: {
    background: "rgba(107, 219, 111,0.4)",
    transition: "0.3s ease",
    "&:hover": {
      background: "rgba(107, 219, 111,0.8)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
  },
  notApproved: {
    background: "rgba(235, 92, 104,0.5)",
    transition: "0.3s ease",

    "&:hover": {
      background: "rgba(235, 92, 104,0.8)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
  },
};
function SmallReservation(props) {
  const { classes, reservation, setIsMore, isMore, shownDate } = props;

  return (
    <div
      className={`${classes.main}  ${
        reservation.isApproved ? classes.approved : classes.notApproved
      }`}
      id={reservation.resId.toString()}
      onClick={() => setIsMore(!isMore)}
    >
      <h4>הזמנה מספר {reservation.resId}</h4>
      <h5>בתאריך {shownDate}</h5>

      {reservation.isApproved ? <p>אושרה</p> : <p>לא אושרה</p>}
    </div>
  );
}

export default withStyles(styles)(SmallReservation);
