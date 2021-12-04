import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import FormEdit from "./FormEdit";
import SmallReservation from "./SmallReservation";
import Expand from "react-expand-animated"; //see how to use it
import Button from "@mui/material/Button";

const styles = {
  reservation: {
    width: "85%",
    backgroundColor: "lightgrey",
    padding: "1em",
    cursor: "pointer",
    margin: "0.5em 0",
    "& h2": {
      textAlign: "center",
    },
    "& p": {
      marginRight: "1em",
    },
    "& button": {
    margin: ' 0 0.3rem '
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
  const [edited, setEdited] = useState(reservation);
  const [isMore, setIsMore] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  if (!isMore) {
    return (
      <SmallReservation
        reservation={edited}
        setIsMore={setIsMore}
        isMore={isMore}
      />
    );
  } else {
    if (isEdit) {
      return (
        <div className={classes.reservation}>
          <div className={classes.edit}>
            <FormEdit
              setIsDeleted={setIsDeleted}
              reservation={edited}
              classes={classes}
              setIsEdit={setIsEdit}
              setEdited={setEdited}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={classes.reservation}
          style={{ display: isDeleted ? "none" : "" }}
        >
          <div className={classes.main} onClick={() => setIsMore(!isMore)}>
            <h2> מספר הזמנה: {reservation.resId}</h2>
            <p>
              <b>שם בהזמנה: </b>
              {edited.nameRes}
            </p>
            <p>
              <b> תאריך: </b>
              {edited.dateRes}
            </p>
            <p>
              <b> מספר פלאפון: </b>
              {edited.phoneRes}
            </p>
            <p>
              <b> מקום :</b>
              {edited.placeRes}
            </p>
            <p>
              <b>כמות מוזמנים: </b>
              {edited.numOfPeopleRes}
            </p>
            <p>
              <b> {edited.isApproved ? "אושרה" : "לא אושרה"} </b>
            </p>
          </div>
          <Button
          variant = 'contained' color = 'primary'
            style={{ marginRight: "85%" }}
            onClick={() => setIsEdit(true)}
          >
            ערוך
          </Button>
        </div>
      );
    }
  }
}
// &#10004; &#10006;
export default withStyles(styles)(ReservationOne);
