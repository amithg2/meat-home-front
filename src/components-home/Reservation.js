// import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";
// import "date-fns";
import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const styles = {
  title: {
    marginTop: "0",
    padding: "0",
    fontSize: "3em",
  },
  Reservation: {
    padding: "0",
    color: "black",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundColor: "lightcyan",
    fontFamily: "Assistant, sans-serif",
    letterSpacing: "0.1em",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundPosition: "center",
    "& input": {
      padding: "1em",
    },
    "& h3": {
      backgroundColor: "rgba(333, 333, 333,0.77)",
      fontSize: "3em",
      padding: "0.3em 2em",
    },
    "& h4": {
      backgroundColor: "rgba(333, 333, 333,0.77)",
      fontSize: "2em",
      padding: "0.3em 2em",
    }, 
  },
  mainReservation: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& Button": {
      width: "50%",
      padding: "1em",
    },
  },
  form: {
    width: "65%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(333, 333, 333,0.88)",
    padding: "2em",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  phoneNumber: {
    marginTop: "1rem",
    fontSize: '1rem'
  },
  bg: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.4)",
  },
  smallForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& ul": {
      display: "none",
    },
  },
  reservationId: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
};

function Reservation(props) {
  const [nameRes, setNameRes] = useState("");
  const [phoneRes, setPhoneRes] = useState("");
  const [placeRes, setPlaceRes] = useState("");
  const [numOfPeopleRes, setNumOfPeopleRes] = useState("");
  const [dateRes, setDateRes] = useState("");
  const [resId, setResId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleDateChange = (e) => {
    setDateRes(e.target.value);
  };

  //make it shorter with hooks : ^^

  const submitFormHandler = async () => {
    setIsLoading(true);
    const newRes = {
      nameRes,
      phoneRes,
      placeRes,
      numOfPeopleRes,
      dateRes,
    };
    const { data } = await axios.post("/addReservation", newRes); //what data to send back ?
    await setResId(data.resId);
    await setIsLoading(false);
  };

  const { classes } = props;
  if (isLoading) {
    return (
      <div className={classes.Reservation}>
        <div
          className={classes.bg}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h4>תודה שהזמנתם! ממתין למספר הזמנה...</h4>
          <img
            style={{ height: "7rem" }}
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
                onError={(errors) => console.log(errors)}
              >
                <h2 className={classes.title}>
                  {resId}
                  להזמנות:
                </h2>
                <p>אנא השאירו פרטים ונחזור אליכם בהקדם.</p>
                <TextValidator
                  sx={{ width: "100%" }}
                  id="name"
                  label="שם"
                  variant="filled"
                  margin="normal"
                  name="name"
                  onChange={(e) => setNameRes(e.target.value)}
                  value={nameRes}
                  validators={["required"]}
                  errorMessages={["חובה לכתוב שם"]}
                />
                <TextValidator
                  sx={{ width: "100%" }}
                  id="phone"
                  label="מספר פלאפון"
                  variant="filled"
                  margin="normal"
                  name="phone"
                  onChange={(e) => setPhoneRes(e.target.value)}
                  value={phoneRes}
                  validators={["required"]}
                  errorMessages={["חובה לכתוב מספר פלאפון"]}
                />
                <TextValidator
                  sx={{ width: "100%" }}
                  id="place"
                  type="place"
                  label="מיקום"
                  variant="filled"
                  margin="normal"
                  name="place"
                  onChange={(e) => setPlaceRes(e.target.value)}
                  value={placeRes}
                  validators={["required"]}
                  errorMessages={["חובה לכתוב מיקום"]}
                />
                <div className={classes.smallForm}>
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                       <KeyboardDatePicker
                         disableToolbar
                         variant="inline"
                         format="dd/MM/yyyy"
                         margin="normal"
                         id="datePicker"
                         label="תאריך"
                         value={dateRes}
                         onChange={handleDateChange}
                         KeyboardButtonProps={{ "aria-label": "change date" }}
                       />
                     </MuiPickersUtilsProvider> */}

                  <TextField
                    id="date"
                    label="תאריך"
                    margin="normal"
                    type="date"
                    format="dd/MM/yyyy"
                    defaultValue={dateRes}
                    onChange={handleDateChange}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                      value={numOfPeopleRes}
                      onChange={(e) => {
                        setNumOfPeopleRes(e.target.value);
                      }}
                      label="Age"
                    >
                      <MenuItem sx={{ width: "100%" }} value="לא סגור">
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
              <h3>מספר הזמנה : {resId} </h3>
              <h4> מספר פלאפון לבירורים : 0509999999</h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Reservation);
