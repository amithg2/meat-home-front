import React, { useEffect } from "react";

import { withStyles } from "@material-ui/styles";
import Main from "./Main";
import About from "./About";
import Carousel from "./Carousel";
import Reservation from "./Reservation";
import axios from "axios";
const styles = {
  home: {
    margin: "0px",
    padding: "0px",
    width: "70%",
    margin: "auto",
  },
  Carousel: {
    // display: "none", //need to see how to cancel component on small size
  },
};
function Home(props) {
  useEffect(() => {
    axios.post("/counter");
  }, []);
  const { photos, classes } = props;
  return (
    <div className={classes.home}>
      <Main />
      <About />
      <div className={classes.Carousel}>
        <Carousel photos={photos} />
      </div>
      <Reservation />
    </div>
  );
}

export default withStyles(styles)(Home);
