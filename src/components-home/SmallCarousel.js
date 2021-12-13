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
      outline: "2px solid #fff",
      outlineOffset: "-2px",
    },
  },
  mainLeft: {
    width: "50%",
    height: "100%",
    backgroundColor: "red",
  },
  half: {
    width: "50%",
    height: "100%",
    display: "flex",
    backgroundColor: "green",
    flexDirection: "column",
  },

  one: {
    height: "50%",
    width: "100%",
    backgroundColor: "purple",
    "& div": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },

  two: {
    height: "50%",
    width: "100%",
    backgroundColor: "black",
    "& div": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      "& img": {
        // border: "0.2em solid white",
      },
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
    <div className={classes.Carousel} id="2s">
      <div className={classes.all}>
        <div className={classes.half}>
          <div className={classes.one}>
            <Slide ref={slideRef} {...properties}>
              {slideImages.map((each, index) => (
                <img src={each} key={index} />
              ))}
            </Slide>
          </div>
          <div className={classes.two}>
            <img src={imagesUrl[1]} />
          </div>
        </div>
        <div className={classes.half}>
          <div className={classes.two}>
            <img src={imagesUrl[2]} />
          </div>
          <div className={classes.one}>
            <Slide ref={slideRef} {...properties}>
              {slideImages.map((each, index) => (
                <img src={each} key={index} />
              ))}
            </Slide>
          </div>
        </div>
      </div>
      <div>
        <Scroll scrollTo={"3"} />
      </div>
    </div>
  );
}

export default withStyles(styles)(Carousel);
