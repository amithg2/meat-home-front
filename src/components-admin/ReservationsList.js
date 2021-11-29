import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import ReservationOne from "./ReservationOne";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const styles = {
  reservetions: {
    width: "100%",
    minHeight: "50vh",
    "& h1": {
      padding: "0",
      margin: "1rem",
      textAlign: "center",
    },
  },
  allReservations: {
    width: "100%",
    display: "flex",
    alighContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "1em",
  },
};

function ReservationsList(props) {
  const [sortBy, setSortBy] = useState("closer");

  const { classes, reservations } = props;

 

  const showAllReservations = () => {
    const arr = reservations.data;
    if (arr) {
      const addedDateArray = reservations.data.map((e) => {
        return {
          ...e,
          date: new Date(e.dateRes).valueOf(),
        };
      });

      addedDateArray.sort((a, b) => a.date - b.date);

      const newArr = addedDateArray.map((e, index) => {
        return <ReservationOne reservation={e} key={index} id={e.resId.toString()} />;
      });
      if (sortBy === "closer") return newArr;
      else if (sortBy === "far") return newArr.reverse();
      else if (sortBy === "numOfPpl") {
        const sortByNum = newArr.sort((a, b) => {
          return (
            a.props.reservation.numOfPeopleRes -
            b.props.reservation.numOfPeopleRes
          );
        });
        return sortByNum.reverse();
      }
    }
  };

  return (
    <div className={classes.reservetions}>
      <h1>כל ההזמנות</h1>
      <FormControl
        sx={{ width: 120 }}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          מיין לפי
        </InputLabel>
        <NativeSelect
          defaultValue={sortBy}
          inputProps={{
            name: "sortBy",
            id: "uncontrolled-native",
          }}
        >
          <option value={"closer"}>קרוב ביותר</option>
          <option value={"far"}>רחוק ביותר</option>
          <option value={"numOfPpl"}>מספר אנשים</option>
        </NativeSelect>
      </FormControl>
      <div className={classes.allReservations}>{showAllReservations()}</div>
    </div>
  );
}

export default withStyles(styles)(ReservationsList);