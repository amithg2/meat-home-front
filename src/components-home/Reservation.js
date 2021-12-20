import axios from "axios";
import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "./styles/ReservatinStyles";

function Reservation(props) {
  const res = {
    nameRes: "",
    phoneRes: "",
    placeRes: "",
    dateRes: "",
    numOfPeopleRes: "",
  };
  const [resId, setResId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reservation, setReservation] = useState(res);

  useEffect(() => {
    ValidatorForm.addValidationRule("isNumber", (value) => {
      if (isNaN(value)) return false;
      return true;
    });
    ValidatorForm.addValidationRule("isShort", (value) => {
      if (value.length < 8) return false;
      return true;
    });
    ValidatorForm.addValidationRule("isLong", (value) => {
      if (value.length > 10) return false;
      return true;
    });
  });
  const submitFormHandler = async () => {
    setIsLoading(true);
    const newRes = {
      ...reservation,
      phoneRes: reservation.phoneRes.replace("-", ""),
    };
    const { data } = await axios.post("https://meat-home-server.herokuapp.com/reservation/add", newRes);
    if (data.success) {
      await setResId(data.resId);
      await setIsLoading(false);
    }
  };

  const { classes } = props;
  if (isLoading) {
    return (
      <div className={classes.Reservation}>
        <div className={classes.bg}>
          <h4>תודה שהזמנתם! ממתין למספר הזמנה...</h4>
          <img
            style={{ height: "7rem" }}
            alt=""
            src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.Reservation} id="3">
        <div className={classes.bg}>
          {!resId ? (
            <div className={classes.mainReservation}>
              <ValidatorForm
                className={classes.form}
                onSubmit={submitFormHandler}
                instantValidate={false}
              >
                <h2 className={classes.title}>להזמנות:</h2>
                <p>אנא השאירו פרטים ונחזור אליכם בהקדם.</p>
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
                  value={reservation.nameRes}
                  validators={["required"]}
                  errorMessages={["חובה לכתוב שם"]}
                />
                <TextValidator
                  sx={{ width: "100%" }}
                  id="phone"
                  label="מספר פלאפון"
                  variant="filled"
                  margin="normal"
                  name="phoneRes"
                  onChange={(e) =>
                    setReservation({ ...reservation, phoneRes: e.target.value })
                  }
                  value={reservation.phoneRes}
                  validators={["required", "isNumber", "isShort", "isLong"]}
                  errorMessages={[
                    "חובה לכתוב מספר פלאפון",
                    "ניתן לכתוב רק ספרות",
                    "המספר קצר מידיי",
                    "המספר ארוך מידיית",
                  ]}
                />
                <TextValidator
                  sx={{ width: "100%" }}
                  id="place"
                  type="place"
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
                <div className={classes.smallForm}>
                  <TextField
                    id="date"
                    label="תאריך"
                    margin="normal"
                    type="date"
                    format="dd/MM/yyyy"
                    defaultValue={reservation.dateRes}
                    onChange={(e) =>
                      setReservation({
                        ...reservation,
                        dateRes: e.target.value,
                      })
                    }
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />

                  <FormControl
                    variant="standard"
                    margin="normal"
                    sx={{ ml: 1, width: "50%" }}
                  >
                    <InputLabel id="numOfPeopleRes">כמות מוזמנים</InputLabel>
                    <Select
                      sx={{ width: "100%" }}
                      labelId="numOfPeopleRes"
                      id="numOfPeopleRes"
                      value={reservation.numOfPeopleRes}
                      defaultValue={0}
                      onChange={(e) => {
                        setReservation({
                          ...reservation,
                          numOfPeopleRes: e.target.value,
                        });
                      }}
                      label="Age"
                    >
                      <MenuItem sx={{ width: "100%" }} value={0}>
                        <em>לא סגור</em>
                      </MenuItem>
                      <MenuItem sx={{ width: "100%" }} value={10}>
                        10 עד
                      </MenuItem>
                      <MenuItem sx={{ width: "100%" }} value={20}>
                        20 עד
                      </MenuItem>
                      <MenuItem sx={{ width: "100%" }} value={30}>
                        30+
                      </MenuItem>
                    </Select>
                  </FormControl>

                  <Button type="submit" variant="contained" margin="normal">
                    שלח
                  </Button>
                </div>

                <h5 className={classes.phoneNumber}>
                  מספר פלאפון להזמנות : 0509999999
                </h5>
              </ValidatorForm>
            </div>
          ) : (
            <div className={classes.reservationId}>
              {resId ? (
                <h3>מספר הזמנה : {resId} </h3>
              ) : (
                <h3>משהו השתבש, אנא נסו שוב מאוחר יותר</h3>
              )}
              <h4> מספר פלאפון לבירורים : 0509999999</h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Reservation);
