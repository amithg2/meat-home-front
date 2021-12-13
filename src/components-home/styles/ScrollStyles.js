
const styles = {
    arrowBigDiv: {
      position: "absolute",
      left: "50%",
      bottom: "1vh",
    },
    arrowSmallDiv: {
      animationName: "$floating",
      animationDuration: "2s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
      position: "relative",
      left: "-50%",
      padding: "10px",
      "& img": {
        height: "10em",
        filter: "drop-shadow(0px 10px 3px rgba(255,255,255,0.68))",
        cursor: "pointer",
        transition: "0.6s ease",
        "&:hover ": {
          transform: "translateY(-5px)",
          filter: "drop-shadow(6px 9px 15px rgba(255,255,255,1))",
        },
      },
      "&:hover": {
        animationName: "",
      },
    },
    "@keyframes floating": {
      from: { transform: "translate(0,  0px)" },
      "50%": { transform: "translate(0, 10px)" },
      to: { transform: "translate(0, -0px)" },
    },
  };

  export default styles