import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import Scroll from "./helpers/Scroll";
import styles from "./styles/CarouselStyles";
import Slider from "./Slider";

function Carousel(props) {
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
        //return array of images backup
      }
    };
    getData();
  }, []);

  const { classes } = props;

  if (imagesUrl) {
    return (
      <div className={classes.Carousel} id="2">
        <div className={classes.all}>
          <div className={classes.mainLeft}>
            <div className={classes.leftBigImg}>
              <Slider images={imagesUrl} />
            </div>
            <div className={classes.leftSmallImg}>
              <div className={classes.leftSmallImg1}>
                <img src={imagesUrl[8]} alt="" />
              </div>
              <div className={classes.leftSmallImg2}>
                <img src={imagesUrl[1]} alt="" />
              </div>
            </div>
          </div>
          <div className={classes.mainRight}>
            <div className={classes.rightLeft}>
              <div className={classes.one}>
                <img src={imagesUrl[6]} alt="" />
              </div>
              <div className={classes.two}>
                <Slider images={imagesUrl} />
              </div>
            </div>
            <div className={classes.rightLeft}>
              <div className={classes.two}>
                <Slider images={imagesUrl} />
              </div>
              <div className={classes.one}>
                <img src={imagesUrl[5]} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Scroll scrollTo={"3"} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default withStyles(styles)(Carousel);
