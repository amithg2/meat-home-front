import sizes from "../../styles/sizes";

const styles = {
    main: {
      width: "80%",
      minHeight: "100vh",
      margin: "auto",
      "& .inside": {
        padding: "0",
        margin: "1rem",
        justifyContent: "center",
        textAlign: "center",
      },
      [sizes.down("md")]: {
        width: "100%",
      },
    },
    titles: {
      fontSize: "0.7rem",
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      height:'4rem',
      "& h2": {
        cursor: "pointer",
        transition: "0.5s ease",
      },
    },
    curTitle: {
      fontSize: "1.1rem",
      color: "black",
      textDecoration: "underline",
    },
  };
  
  export default styles