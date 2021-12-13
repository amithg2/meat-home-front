const styles = {
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
      outline: "4px solid #fff",
      outlineOffset: "-4px",
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
    },
  },
};

export default styles