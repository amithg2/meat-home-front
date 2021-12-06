import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  statistics: {
    backgroundColor: "lightcyan",
    width: "100%",
    height: "40vh",
    display : 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    width: "30%",
    height: "10vh",
    border: "1px solid black",
    margin: '0.3rem',
    background : 'lightgrey',
    textAlign: 'center'
  },
};


//   //
  //   const { numOfPeopleTotal, numOfResTotal } = dataStats;
  //   const average = Math.round(numOfPeopleTotal / numOfResTotal);
  //   console.log(numOfPeopleTotal, numOfResTotal);
  //   console.log(average);

//   await new DataModel({
  //     resIds: [1],
  //     enters: 0,
  //     madeRes: 0,
  //     numOfPeopleAvg: 1,
  //     numOfPeopleTotal: 1,
  //     numOfResTotal: 1,
  //   }).save();

  


function Statistics(props) {
  console.log(props);

  const { classes, reservations } = props;

  
  return (
    <div className={classes.statistics}>
     
    </div>
  );
}

export default withStyles(styles)(Statistics);
