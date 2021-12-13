import sizes from "../../styles/sizes";

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
  },
  SmallCarousel: {
    display: "none",
    [sizes.down("sm")]: {
      display: "block",
    },
  },
};

export default styles;
