import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Scroll from "./helpers/Scroll";

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1592686092916-672fa9e86866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
    backgroundPosition: "top",
  },
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
      zIndex: '14',
    fontSize: "10vw",
    fontFamily: "Roboto, sans-serif",
    textDecoration: "none",
    color: "#000",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.01) 5%, rgba(0,0,0,1) 20%, rgba(253,29,29,1) 30%, rgba(0,0,0,1) 39%, rgba(0,0,0,0.0) 93%, rgba(0,0,0,0.01) 93%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto .1rem",
    backgroundPosition: "bottom",
    transition: " all ease-in-out .5s",
    position: 'absolute',
    filter : 'drop-shadow(9px 19px 9px rgba(255,255,255,0.48))',

    "& span": {
      color: "#E71A1A",
      transition: "ease-in-out .5s",
    },
    "&:hover": {
      backgroundSize: "auto .14rem",
      userSelect: "none",
      color: "#E71A1A",
      filter : 'drop-shadow(9px 19px 26px rgba(255,255,255,0.78))',

      backgroundImage:
        "linear-gradient(90deg, rgba(249,14,14,0.03125) 2%, rgba(249,14,14,0.3085609243697479) 16%, rgba(249,14,14,0.9051995798319328) 21%, rgba(0,0,0,1) 29%, rgba(246,15,15,1) 37%, rgba(246,15,15,0.26934523809523814) 52%, rgba(246,15,15,0) 65%)",
      "& span": {
        color: "#000",
      },
    },
  },
  
};

const Main = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <h1 className={classes.name}>
          Me<span>at</span> Home
        </h1>
       <Scroll scrollTo={'1'}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(Main);
