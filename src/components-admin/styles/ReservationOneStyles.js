import sizes from "../../styles/sizes";

const styles = {
  reservation: {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    width: "85%",
    marginRight: '6.5%',
    backgroundColor: "lightgrey",
    padding: "1%",
    cursor: "pointer",
    margin: "0.5em 0",
    "& h2": {
      textAlign: "center",
    },
    "& p": {
      marginRight: "1em",
    },
    "& button": {
      margin: " 0 0.3rem ",
    },
    [sizes.down("md")]: {
        width: "96%",
        padding: '2%',
        marginRight: '0',

      },
  },
};

export default styles;
