import React, { useEffect } from "react";

import { withStyles } from "@material-ui/styles";
import Main from "./Main";
import About from "./About";
import Carousel from "./Carousel";
import Reservation from "./Reservation";
import axios from "axios";
import sizes from "../styles/sizes";
import SmallCarousel from "./SmallCarousel";
const styles = {
  home: {
    margin: "0px",
    padding: "0px",
    width: "70%",
    margin: "auto",
    [sizes.down("lg")]: {
      width: "100%",
    },
  },
  Carousel: {
    [sizes.down("sm")]: {
      display: "none",
    },
  }, SmallCarousel : {
      display: 'none',
    [sizes.down("sm")]: {
        display: "block",
      },
  }
};
function Home(props) {
  useEffect(() => {
    axios.post("/counter");
  }, []);
  const { classes } = props;
  return (
    <div className={classes.home}>
      <Main />
      <About />
      <div className={classes.Carousel}>
        <Carousel />
      </div>
      <div className={classes.SmallCarousel}>
          <SmallCarousel />
      </div>
      <Reservation />
    </div>
  );
}

export default withStyles(styles)(Home);
