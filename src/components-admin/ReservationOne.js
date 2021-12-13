import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/styles";
import FormEdit from "./FormEdit";
import SmallReservation from "./SmallReservation";
import Button from "@mui/material/Button";
import { OpenResContext } from "./contexts/OpenResContext";
import useToggle from "../hooks/useToggle";
import styles from "./styles/ReservationOneStyles";
import SnackBar from "./SnackBar";

function ReservationOne(props) {
  const { reservation, classes } = props;
  const { openedRes } = useContext(OpenResContext);
  const [edited, setEdited] = useState(reservation);
  const [isEdit, isEditToggle] = useToggle(false);
  const [isMore, isMoreToggle] = useToggle(false);
  const [isDeleted, isDeletedToggle] = useToggle(false);
  const [isScrolled, isScrollToggle] = useToggle(false);
  const [data, setData] = useState("");

  const date = new Date(reservation.dateRes);
  const shownDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  if (!isMore) {
    if (openedRes === reservation.resId && !isScrolled) {
      isMoreToggle();
    }
    return (
      <SmallReservation
        reservation={edited}
        setIsMore={isMoreToggle}
        isMore={isMore}
        shownDate={shownDate}
      />
    );
  } else {
    if (isEdit) {
      return (
        <div className={classes.reservation} id={reservation.resId.toString()}>
          <div className={classes.edit}>
            <FormEdit
              setIsDeleted={isDeletedToggle}
              originalReservation={edited}
              setIsEdit={isEditToggle}
              setEdited={setEdited}
              setData={setData}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.main} >
            {data && <SnackBar data={data} />}
          <div
           className={classes.reservation}
            style={{ display: isDeleted ? "none" : "" }}
            id={reservation.resId.toString()}
          >
            <div
              className={classes.main}
              onClick={() => {
                isMoreToggle();
                isScrollToggle();
              }}
            >
              <h2> מספר הזמנה: {reservation.resId}</h2>
              <p>
                <b>שם בהזמנה: </b>
                {edited.nameRes}
              </p>
              <p>
                <b> תאריך: </b>
                {shownDate}
              </p>
              <p>
                <b> מספר פלאפון: </b>
                {"0" + edited.phoneRes}
              </p>
              <p>
                <b> מקום :</b>
                {edited.placeRes}
              </p>
              <p>
                <b>כתובת מלאה :</b>
                {edited.fullAdress || "לא התווסף"}
              </p>
              <p>
                <b>כמות מוזמנים: </b>
                {edited.numOfPeopleRes}
              </p>
              <p>
                <b> {edited.isApproved ? "אושרה" : "לא אושרה"} </b>
              </p>
            </div>
            <div dir="ltr">
              <Button
                variant="contained"
                color="primary"
                onClick={() => isEditToggle()}
              >
                ערוך
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default withStyles(styles)(ReservationOne);
