import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Main from "./Main";
import About from "./About";
import Carousel from "./Carousel";
import Reservation from "./Reservation";
import axios from "axios";
import SmallCarousel from "./SmallCarousel";
import styles from "./styles/HomeStyles";

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
