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
    axios.post("https://meat-home-server.herokuapp.com/guest/counter");
  }, []);
  const { classes } = props;
  return (
    <div className={classes.home}>
      <a style={{position: 'absolute', zIndex: '40', left: '0'}} href='/login'>Login</a>
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
