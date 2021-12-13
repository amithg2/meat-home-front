import React from "react";
import { withStyles } from "@material-ui/styles";
import Scroll from "./helpers/Scroll";
import styles from "./styles/AboutStyles";

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
        <div className={classes.scrollToBig}>
          <Scroll scrollTo={"2"} />
        </div>
        <div className={classes.scrollToSmall}>
          <Scroll scrollTo={"2s"} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
