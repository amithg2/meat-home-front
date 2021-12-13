import sizes from "../../styles/sizes";

const styles = {
  title: {
    marginTop: "0",
    padding: "0",
    fontSize: "3em",
    margin: "0",
  },
  Reservation: {
    padding: "0",
    color: "black",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundColor: "lightcyan",
    fontFamily: "Assistant, sans-serif",
    letterSpacing: "0.1em",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundPosition: "center",
    "& input": {
      padding: "1em",
    },
    "& h3": {
      backgroundColor: "rgba(333, 333, 333,0.77)",
      fontSize: "3em",
      padding: "0.3em 2em",
    },
    "& h4": {
      backgroundColor: "rgba(333, 333, 333,0.77)",
      fontSize: "2em",
      padding: "0.3em 2em",
    },
  },
  mainReservation: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& Button": {
      width: "50%",
      padding: "1em",
    },
  },
  form: {
    width: "65%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgba(333, 333, 333,0.88)",
    padding: "2em",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    [sizes.down("sm")]: {
      width: "100%",
      padding: "1em",
    },
  },
  phoneNumber: {
    marginTop: "1rem",
    fontSize: "1rem",
  },
  bg: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  smallForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& ul": {
      display: "none",
    },
  },
  reservationId: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
};
export default styles;
