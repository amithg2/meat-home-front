import React, { useEffect, useState, createRef } from "react";
import { withStyles } from "@material-ui/styles";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Scroll from "./helpers/Scroll";

const styles = (theme) => ({
  Carousel: {
    color: "red",
    height: "100vh",
    width: "100%",
  },
  all: {
    height: "100%",
    width: "100%",
    display: "flex",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      outline: '4px solid #fff',
      outlineOffset: '-4px',
    },
  },
  mainLeft: {
    width: "45%",
    height: "100%",
  },
  mainRight: {
    width: "55%",
    height: "100%",
    display: "flex",
  },
  leftBigImg: {
    height: "50%",
    width: "100%",
    "& div": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
  leftSmallImg: {
    height: "50%",
    width: "100%",
    display: "flex",
  },
  leftSmallImg1: {
    minHeight: "100%",
    width: "50%",
  },
  leftSmallImg2: {
    height: "100%",
    width: "50%",
  },

  rightRight: {
    width: "50%",
    height: "100%",
  },
  rightLeft: {
    width: "50%",
    height: "100%",
  },
  one: {
    height: "40%",
    width: "100%",
  },
  two: {
    height: "60%",
    width: "100%",
    "& div": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      '& img' :{
        // border: "0.2em solid white",
      }
    },
  },
});

function Carousel(props) {
  //   const { classes, photos } = props;
  const { classes } = props;

  //   const makeImagesUrl = () => {
  //     const newArr = photos.map((e) => {
  //       return e.source;
  //     });
  //     return newArr;
  //   };

  //   const imagesUrl = makeImagesUrl();
  const imagesUrl = [
    "https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    "https://images.unsplash.com/photo-1613454320437-0c228c8b1723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ];
  const slideImages = [imagesUrl[0], imagesUrl[1], imagesUrl[2]];

  const slideRef = createRef();

  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    canSwipe: false,
    cssClass: ".one",
    // indicators: (i) => <div className="indicator">{i + 1}</div>,
  };

  return (
    <div className={classes.Carousel} id="2">
      <div className={classes.all}>
        <div className={classes.mainLeft}>
          <div className={classes.leftBigImg}>
            <Slide ref={slideRef} {...properties}>
              {slideImages.map((each, index) => (
                <img
                  src={each}
                  key={index}
                  style={{ maxHeight: "600px", minHeight: "660px" }}
                />
              ))}
            </Slide>
          </div>
          <div className={classes.leftSmallImg}>
            <div className={classes.leftSmallImg1}>
              <img src={imagesUrl[2]} />
            </div>
            <div className={classes.leftSmallImg2}>
              <img src={imagesUrl[2]} />
            </div>
          </div>
        </div>
        <div className={classes.mainRight}>
          <div className={classes.rightLeft}>
            <div className={classes.one}>
              <img src={imagesUrl[2]} />
            </div>
            <div className={classes.two}>
              <Slide ref={slideRef} {...properties}>
                {slideImages.map((each, index) => (
                  <img key={index} src={each} />
                ))}
              </Slide>
            </div>
          </div>
          <div className={classes.rightLeft}>
            <div className={classes.two}>
              <Slide ref={slideRef} {...properties}>
                {slideImages.map((each, index) => (
                  <img src={each} key={index} />
                ))}
              </Slide>
            </div>
            <div className={classes.one}>
              <img src={imagesUrl[2]} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Scroll scrollTo={'3'} />
      </div>
    </div>
  );
}

export default withStyles(styles)(Carousel);
