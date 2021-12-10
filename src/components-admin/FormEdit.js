import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AlertDialog from "./AlertDialog";
import Button from "@mui/material/Button";

function FormEdit({
  originalReservation,
  classes,
  setIsEdit,
  setIsDeleted,
  setEdited,
}) {
  const [reservation, setReservation] = useState(originalReservation);
  const [isAlert, setIsAlert] = useState("");
  const [message, setMessage] = useState("");

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
    setReservation(originalReservation);
    setIsEdit(false);
  };

  const handleSubmit = async () => {
    setEdited(reservation);
    const { data } = await axios
      .post("/reservation/edit", reservation, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then(setIsEdit(false))
      .catch((err) => err);
  };

  const handleDelete = async () => {
    setIsEdit(false);
    const { isDeleted } = await axios.post(
      "/reservation/delete",
      {
        resId: reservation.resId,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );
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
          onChange={(e) =>
            setReservation({ ...reservation, nameRes: e.target.value })
          }
          value={reservation.nameRes}
          validators={["required"]}
          errorMessages={["חובה לכתוב שם"]}
        />

        <TextField
          id="date"
          label="תאריך"
          margin="normal"
          type="date"
          format="dd/MM/yyyy"
          defaultValue={reservation.dateRes}
          onChange={(e) =>
            setReservation({ ...reservation, dateRes: e.target.value })
          }
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
          onChange={(e) =>
            setReservation({ ...reservation, phoneRes: e.target.value })
          }
          value={reservation.phoneRes}
          validators={["required"]}
          errorMessages={["חובה לכתוב מספר פלאפון"]}
        />

        <TextValidator
          sx={{ width: "40%" }}
          id="fullAdress"
          label="כתובת מלאה"
          variant="filled"
          margin="normal"
          name="fullAdress"
          onChange={(e) =>
            setReservation({ ...reservation, fullAdress: e.target.value })
          }
          value={reservation.fullAdress}
        />
        <TextValidator
          sx={{ width: "40%" }}
          id="place"
          label="מיקום"
          variant="filled"
          margin="normal"
          name="place"
          onChange={(e) =>
            setReservation({ ...reservation, placeRes: e.target.value })
          }
          value={reservation.placeRes}
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
          onChange={(e) =>
            setReservation({ ...reservation, numOfPeopleRes: e.target.value })
          }
          value={reservation.numOfPeopleRes}
          validators={["required"]}
          errorMessages={["חובה לכתוב מספר אנשים"]}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={reservation.isApproved}
              onClick={() =>
                setReservation({
                  ...reservation,
                  isApproved: !reservation.isApprovedEdit,
                })
              }
            />
          }
          label={reservation.isApproved ? "אושרה" : "לא אושרה"}
        />
      </ValidatorForm>
      <div className={classes.editButtons}>
        <Button
          variant="contained"
          color="error"
          onClick={() => alertHandler("delete")}
          type="submit"
        >
          מחק
        </Button>
        <Button
          variant="contained"
          type="submit"
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
