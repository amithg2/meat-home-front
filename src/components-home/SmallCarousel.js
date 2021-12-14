import React, { useEffect, useState  } from "react";
import { withStyles } from "@material-ui/styles";
import Scroll from "./helpers/Scroll";
import styles from "./styles/SmallCarouselStyles";
import Slider from "./Slider";
import axios from "axios";

function SmallCarousel(props) {
    const [imagesUrl, setImagesUrl] = useState();
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios.get("/guest/images");
        if (data.data) {
          const urlarr = data.data.map((e) => {
            return e.full_picture;
          });
          await setImagesUrl(urlarr);
        } else {
        }
      };
      getData();
    }, []);
  
    const { classes } = props;
  
    if (imagesUrl) {
  return (
    <div className={classes.Carousel} id="2s">
      <div className={classes.all}>
        <div className={classes.half}>
          <div className={classes.one}>
            <Slider images = {imagesUrl} />
          </div>
          <div className={classes.two}>
            <img src={imagesUrl[1]} alt='' />
          </div>
        </div>
        <div className={classes.half}>
          <div className={classes.two}>
            <img src={imagesUrl[7]}  alt=''/>
          </div>
          <div className={classes.one}>
          <Slider images = {imagesUrl} />

          </div>
        </div>
      </div>
      <div>
        <Scroll scrollTo={"3"} />
      </div>
    </div>
  ) } else {
      return null
  }

}

export default withStyles(styles)(SmallCarousel);
