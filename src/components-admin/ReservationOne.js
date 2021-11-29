import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const styles = {
  reservation: {
    width: "85%",
    backgroundColor: "lightgrey",
    padding: "1em",
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
  const [isDeleted, setIsDeleted] = useState(false);
  const [nameEdit, setNameEdit] = useState(reservation.nameRes);
  const [dateEdit, setDateEdit] = useState(reservation.dateRes);
  const [phoneEdit, setPhoneEdit] = useState(reservation.phoneRes);
  const [placeEdit, setPlaceEdit] = useState(reservation.placeRes);
  const [isApprovedEdit, setIsApprovedEdit] = useState(reservation.isApproved);
  const [numOfPeopleEdit, setNumOfPeopleEdit] = useState(
    reservation.numOfPeopleRes
  );
//ract hooks ^^

  const handleCancel = () => {
    setIsEdit(false);
    setNameEdit(reservation.nameRes);
    setDateEdit(reservation.dateRes);
    setPhoneEdit(reservation.phoneRes);
    setPlaceEdit(reservation.placeRes);
    setIsApprovedEdit(reservation.isApproved);
    setNumOfPeopleEdit(reservation.numOfPeopleRes);
  };

  const handleSubmit = async () => {
    setIsEdit(false);
    const newDate = new Date(dateEdit);
    console.log(dateEdit)
    console.log(newDate.toISOString())
    const editedRes = {
      resId: reservation.resId,
      nameRes: nameEdit,
      dateRes: dateEdit,
      phoneRes: phoneEdit,
      placeRes: placeEdit,
      isApproved: isApprovedEdit,
      numOfPeopleRes: numOfPeopleEdit,
    };
    const { data } = await axios.post("/editReservation", editedRes); //what data to send back ?
  };

  const handleDelete = async () => {
    setIsEdit(false);
    const { isDeleted } = await axios.post("/deleteReservation", {
      resId: reservation.resId,
    });
    setIsDeleted(true);
  };
  if (!isDeleted) {
    return (
      <div className={classes.reservation}>
        {isEdit ? (
          <div className={classes.edit}>
            <ValidatorForm
              className={classes.form}
              onSubmit={() => "a"}
              onError={(errors) => console.log(errors)}
            >
              <TextValidator
                sx={{ width: "40%" }}
                id="name"
                label="שם"
                variant="filled"
                margin="normal"
                name="name"
                onChange={(e) => setNameEdit(e.target.value)}
                value={nameEdit}
                validators={["required"]}
                errorMessages={["חובה לכתוב שם"]}
              />

              <TextField
                id="date"
                label="תאריך"
                margin="normal"
                type="date"
                format="dd/MM/yyyy"
                defaultValue={dateEdit}
                onChange={(e) => setDateEdit(e.target.value)}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextValidator
                sx={{ width: "40%" }}
                id="phone"
                label="מספר פלאפון"
                variant="filled"
                margin="normal"
                name="phone"
                onChange={(e) => setPhoneEdit(e.target.value)}
                value={phoneEdit}
                validators={["required"]}
                errorMessages={["חובה לכתוב מספר פלאפון"]}
              />
              <TextValidator
                sx={{ width: "40%" }}
                id="place"
                label="מיקום"
                variant="filled"
                margin="normal"
                name="place"
                onChange={(e) => setPlaceEdit(e.target.value)}
                value={placeEdit}
                validators={["required"]}
                errorMessages={["חובה לכתוב מיקום"]}
              />

              <TextValidator
                sx={{ width: "40%" }}
                id="numOfPeople"
                type="number"
                label="כמות אנשים"
                variant="filled"
                margin="normal"
                name="place"
                onChange={(e) => setNumOfPeopleEdit(e.target.value)}
                value={numOfPeopleEdit}
                validators={["required"]}
                errorMessages={["חובה לכתוב מיקום"]}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked={isApprovedEdit}
                    onClick={() => setIsApprovedEdit(!isApprovedEdit)}
                  />
                }
                label={isApprovedEdit ? "אושרה" : "לא אושרה"}
              />
            </ValidatorForm>
            <div className={classes.editButtons}>
              <button style={{ backgroundColor: "red" }} onClick={handleCancel}>
                בטל
              </button>
              <button
                style={{ backgroundColor: "green" }}
                type="submit"
                onClick={handleSubmit}
              >
                שמור
              </button>
              <button
                style={{ backgroundColor: "black" }}
                onClick={handleDelete}
              >
                מחק
              </button>
            </div>
          </div>
        ) : (
          <div className={classes.main}>
            <h2> מספר הזמנה: {reservation.resId}</h2>
            <p>
              <b>שם בהזמנה: </b>
              {nameEdit}
            </p>
            <p>
              <b> תאריך: </b>
              {dateEdit}
            </p>
            <p>
              <b> מספר פלאפון: </b>
              {phoneEdit}
            </p>
            <p>
              <b> מקום :</b>
              {placeEdit}
            </p>
            <p>
              <b>כמות מוזמנים: </b>
              {numOfPeopleEdit}
            </p>
            <p>
              <b> {isApprovedEdit ? "אושרה" : "לא אושרה"} </b>
            </p>
          </div>
        )}
        {!isEdit && (
          <button
            style={{ marginRight: "85%" }}
            onClick={() => setIsEdit(true)}
          >
            ערוך
          </button>
        )}
      </div>
    );
  } else {
    return null;
  }
}
// &#10004; &#10006;
export default withStyles(styles)(ReservationOne);
