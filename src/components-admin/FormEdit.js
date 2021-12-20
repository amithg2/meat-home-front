import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import axios from "axios";
import AlertDialog from "./AlertDialog";
import Button from "@mui/material/Button";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FormEditStyles";

function FormEdit({
  originalReservation,
  classes,
  setIsEdit,
  setIsDeleted,
  setEdited,
  setData,
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
    const { data } = await axios.post("https://meat-home-server.herokuapp.com/reservation/edit", reservation, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    setData(data);
    if (!data.success) setEdited(originalReservation);
    setIsEdit(false);
  };

  const handleDelete = async () => {
    setIsEdit(false);
    const { data } = await axios.post(
      "https://meat-home-server.herokuapp.com/reservation/delete",
      {
        resId: reservation.resId,
      },
      {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      }
    );

    setData(data);
    if (data.success) setIsDeleted();
    setIsEdit();
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
      <div className={classes.formEdit}>
        <ValidatorForm
          onError={(errors) => console.log(errors)}
          onSubmit={(e) => e}
        >
          <TextValidator
            sx={{ width: "100%" }}
            id="name"
            label="שם"
            variant="filled"
            margin="normal"
            name="name"
            onChange={(e) =>
              setReservation({ ...reservation, nameRes: e.target.value })
            }
            value={reservation.nameRes || undefined}
            validators={["required"]}
            errorMessages={["חובה לכתוב שם"]}
          />

          <TextField
            id="date"
            label="תאריך"
            margin="normal"
            type="date"
            format="dd/MM/yyyy"
            value={reservation.dateRes || undefined}
            onChange={(e) =>
              setReservation({ ...reservation, dateRes: e.target.value })
            }
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextValidator
            sx={{ width: "100%" }}
            id="phone"
            label="מספר פלאפון"
            variant="filled"
            margin="normal"
            name="phone"
            onChange={(e) =>
              setReservation({ ...reservation, phoneRes: e.target.value })
            }
            value={reservation.phoneRes || undefined}
            validators={["required"]}
            errorMessages={["חובה לכתוב מספר פלאפון"]}
          />

          <TextValidator
            sx={{ width: "100%" }}
            id="fullAdress"
            label="כתובת מלאה"
            variant="filled"
            margin="normal"
            name="fullAdress"
            onChange={(e) =>
              setReservation({ ...reservation, fullAdress: e.target.value })
            }
            value={reservation.fullAdress || undefined}
          />
          <TextValidator
            sx={{ width: "100%" }}
            id="place"
            label="מיקום"
            variant="filled"
            margin="normal"
            name="place"
            onChange={(e) =>
              setReservation({ ...reservation, placeRes: e.target.value })
            }
            value={reservation.placeRes || undefined}
            validators={["required"]}
            errorMessages={["חובה לכתוב מיקום"]}
          />

          <TextValidator
            sx={{ width: "100%" }}
            id="numOfPeople"
            type="number"
            label="כמות אנשים"
            variant="filled"
            margin="normal"
            name="place"
            onChange={(e) =>
              setReservation({ ...reservation, numOfPeopleRes: e.target.value })
            }
            value={reservation.numOfPeopleRes || undefined}
            validators={["required"]}
            errorMessages={["חובה לכתוב מספר אנשים"]}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={reservation.isApproved}
                onClick={() =>
                  setReservation({
                    ...reservation,
                    isApproved: !reservation.isApproved,
                  })
                }
              />
            }
            label={reservation.isApproved ? "אושרה" : "לא אושרה"}
          />
        </ValidatorForm>
      </div>
      <div dir="ltr">
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

export default withStyles(styles)(FormEdit);
