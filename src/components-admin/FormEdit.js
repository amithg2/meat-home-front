import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AlertDialog from "./AlertDialog";
import Button from "@mui/material/Button";

function FormEdit({
  reservation,
  classes,
  setIsEdit,
  setIsDeleted,
  setEdited,
}) {
  const [nameEdit, setNameEdit] = useState(reservation.nameRes);
  const [dateEdit, setDateEdit] = useState(reservation.dateRes);
  const [phoneEdit, setPhoneEdit] = useState(reservation.phoneRes);
  const [placeEdit, setPlaceEdit] = useState(reservation.placeRes);
  const [isApprovedEdit, setIsApprovedEdit] = useState(reservation.isApproved);
  const [isAlert, setIsAlert] = useState("");
  const [message, setMessage] = useState("");
  const [numOfPeopleEdit, setNumOfPeopleEdit] = useState(
    reservation.numOfPeopleRes
  );

  //ract hooks ^^
  const handlerCancelDialog = () => {
    setIsAlert("");
    setMessage("");
  };
  const alertHandler = (type) => {
    setIsAlert(type);
    if (type === "submit") {
      setMessage("האם אתה בטוח שברצונך לשמור את השינויים?");
    } else if (type === "delete") {
      setMessage("האם אתה בטוח שברצונך שברצונך למחוק הזמנה זו?");
    } else if (type === "cancel") {
      setMessage("האם אתה בטוח שאתה רוצה לבטל את השינויים?");
    }
  };

  const handleCancel = () => {
    setNameEdit(reservation.nameRes);
    setDateEdit(reservation.dateRes);
    setPhoneEdit(reservation.phoneRes);
    setPlaceEdit(reservation.placeRes);
    setIsApprovedEdit(reservation.isApproved);
    setNumOfPeopleEdit(reservation.numOfPeopleRes);
    setIsEdit(false);
  };

  const handleSubmit = async () => {
    const editedRes = {
      resId: reservation.resId,
      nameRes: nameEdit,
      dateRes: dateEdit,
      phoneRes: phoneEdit,
      placeRes: placeEdit,
      isApproved: isApprovedEdit,
      numOfPeopleRes: numOfPeopleEdit,
    };
    setEdited(editedRes);
    const { data } = await axios
      .post("/editReservation", editedRes)
      .then(setIsEdit(false)); //what data to send back ?
  };

  const handleDelete = async () => {
    setIsEdit(false);
    const { isDeleted } = await axios.post("/deleteReservation", {
      resId: reservation.resId,
    });
    setIsDeleted(true);
  };
  return (
    <div>
      {isAlert && (
        <AlertDialog
          message={message}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handlerCancelDialog={handlerCancelDialog}
          type={isAlert}
        />
      )}

      <ValidatorForm
        className={classes.form}
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
        <Button
          variant="contained"
          color="error"
          onClick={() => alertHandler("delete")}
        >
          מחק
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => alertHandler("cancel")}
        >
          בטל
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => alertHandler("submit")}
        >
          שמור
        </Button>
      </div>
    </div>
  );
}

export default FormEdit;
