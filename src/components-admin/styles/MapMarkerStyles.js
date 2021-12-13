const styles = {
  window: {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "200px",
    minHeight: "100px",
    backgroundColor: "white",
    borderRadius: "10px",
    userSelect: "none",
    cursor: "default",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    zIndex: "40",
    "& h3": {
      textAlign: "center",
      margin: "0",
    },
    "& p": {
      margin: "0",
      paddingRight: "10px",
    },
  },

  point: {
    fontSize: "1.4em",
    margin: "0",
    zIndex: "2",
    padding: "10px",
    userSelect: "none",
  },
  buttonMark: {
    zIndex: "100",
    color: "black",
    border: "2px solid black",
    borderRadius: "3px",
    margin: "1rem",
    padding: "0.1rem 0.4rem",
    fontSize: "1rem",
    boxShadow: "rgba(100, 100, 111, 0.6) 0px 3px 9px 0px",
    transition: "0.3s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.2)",
    },
  },
};

export default styles;
