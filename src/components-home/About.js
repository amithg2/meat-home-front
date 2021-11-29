import React from "react";
import { withStyles } from "@material-ui/styles";
import Scroll from "./helpers/Scroll";

const styles = {
  about: {
    color: "#E71A1A",
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundPosition: "top",
  },
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.4vw",
    letterSpacing: "0.4em",
    textAlign: "center",
    "& h2, h3": {
      padding: "0 1em",
      filter: "drop-shadow(2px 3px 9px rgba(255,255,255,0.99))",
      fontFamily: "Assistant, sans-serif",
    },
  },
  event: {},
};

function About(props) {
  const { classes } = props;
  return (
    <div className={classes.about} id="1">
      <div className={classes.main}>
        <h2>הפכו את האירוע שלכם לבלתי נשכח </h2>
        <h3>עד 50 מוזמנים</h3>
        <h3>בכל הארץ</h3>
      </div>
      <div>
        <Scroll scrollTo={'2'} />
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
