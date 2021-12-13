import React from "react";
import downArrow from "../public/downArrow.png";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";
import styles from "../styles/ScrollStyles";

function Scroll(props) {
  const { classes, scrollTo } = props;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: "10",
      }}
    >
      <Link
        activeClass="active"
        to={scrollTo}
        spy={true}
        smooth={true}
        duration={500}
      >
        <div className={classes.arrowBigDiv}>
          <div className={classes.arrowSmallDiv}>
            <img src={downArrow}  alt=''/>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default withStyles(styles)(Scroll);
