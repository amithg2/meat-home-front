import React from "react";
import downArrow from "../public/downArrow.png";
import { withStyles } from "@material-ui/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const styles = {
  arrowBigDiv: {
    position: "absolute",
    left: "50%",
    bottom: "1vh",
  },
  arrowSmallDiv: {
    animationName: "$floating",
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    position: "relative",
    left: "-50%",
    padding: "10px",
    "& img": {
      height: "10em",
      filter: "drop-shadow(0px 10px 3px rgba(255,255,255,0.68))",
      cursor: "pointer",
      transition: "0.6s ease",
      "&:hover ": {
        transform: "translateY(-5px)",
        filter: "drop-shadow(6px 9px 15px rgba(255,255,255,1))",
      },
    },
    "&:hover": {
      animationName: "",
    },
  },
  "@keyframes floating": {
    from: { transform: "translate(0,  0px)" },
    "50%": { transform: "translate(0, 10px)" },
    to: { transform: "translate(0, -0px)" },
  },
};

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
            <img src={downArrow} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default withStyles(styles)(Scroll);
