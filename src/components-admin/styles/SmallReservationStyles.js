import sizes from "../../styles/sizes";

const styles = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0.3em 0",
    cursor: "pointer",
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    [sizes.down("xs")]: {
        fontSize : '0.8em',
      }, 
  },
  approved: {
    background: "rgba(107, 219, 111,0.4)",
    transition: "0.3s ease",
    "&:hover": {
      background: "rgba(107, 219, 111,0.8)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
  },
  notApproved: {
    background: "rgba(235, 92, 104,0.5)",
    transition: "0.3s ease",

    "&:hover": {
      background: "rgba(235, 92, 104,0.8)",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
  },
};

export default styles;
