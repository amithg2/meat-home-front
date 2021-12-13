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
    },
  },
};
 export default styles