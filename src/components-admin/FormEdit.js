import React,{useState} from 'react'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import axios from 'axios';

function FormEdit({reservation, classes, setIsEdit}) {

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
    return (
        <div >
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
    )
}

export default FormEdit
