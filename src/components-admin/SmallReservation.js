import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/SmallReservationStyles";
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
