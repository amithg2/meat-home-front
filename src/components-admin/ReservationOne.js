import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import FormEdit from "./FormEdit";
import SmallReservation from "./SmallReservation";

const styles = {
  reservation: {
    width: "85%",
    backgroundColor: "lightgrey",
    padding: "1em",
    cursor: 'pointer',
    margin: "0.5em 0",
    "& h2": {
      textAlign: "center",
    },
    "& p": {
      marginRight: "1em",
    },
    "& button": {
      margin: "0.2em",
      alignItems: "center",
      backgroundColor: "#0A66C2",
      border: "0",
      borderRadius: "100px",
      boxSizing: " border-box",
      color: "#ffffff",
      cursor: "pointer",
      display: "inline-flex",
      fontFamily:
        '-apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
      fontSize: "16px",
      fontWeight: "600",
      justifyContent: "center",
      lineHeight: "20px",
      maxWidth: "480px",
      minHeight: "40px",
      minWidth: " 0px",
      overflow: "hidden",
      padding: "0px",
      paddingLeft: "20px",
      paddingRight: "20px",
      textAlign: "center",
      touchAtion: "manipulation",
      transition:
        "background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s",
      userSelect: "none",
      webkitUserSelect: "none",
      verticalAlign: "middle",
      "&:hover , &:focus": {
        backgroundColor: "#16437E",
        color: "#ffffff",
      },
    },
  },
  editButtons: {
    display: "flex",
    marginRight: "75%",
  },
};
function ReservationOne(props) {
  const { reservation, classes } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isMore, setIsMore] = useState(false);

  if (!isMore) {
    return <SmallReservation reservation={reservation} setIsMore={setIsMore} isMore={isMore}/>;
  } else {
    if (isEdit) {
      return (
        <div className={classes.reservation}>
          <div className={classes.edit}>
            <FormEdit
              reservation={reservation}
              classes={classes}
              setIsEdit={setIsEdit}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.reservation}>
          <div className={classes.main} onClick={() => setIsMore(!isMore)}>
            <h2> מספר הזמנה: {reservation.resId}</h2>
            <p>
              <b>שם בהזמנה: </b>
              {reservation.nameRes}
            </p>
            <p>
              <b> תאריך: </b>
              {reservation.dateRes}
            </p>
            <p>
              <b> מספר פלאפון: </b>
              {reservation.phoneRes}
            </p>
            <p>
              <b> מקום :</b>
              {reservation.placeRes}
            </p>
            <p>
              <b>כמות מוזמנים: </b>
              {reservation.numOfPeopleRes}
            </p>
            <p>
              <b> {reservation.isApproved ? "אושרה" : "לא אושרה"} </b>
            </p>
          </div>
          <button
            style={{ marginRight: "85%" }}
            onClick={() => setIsEdit(true)}
          >
            ערוך
          </button>
        </div>
      );
    }
  }
}
// &#10004; &#10006;
export default withStyles(styles)(ReservationOne);
