import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import styles from "./styles/LoginStyles";

function Login({ classes }) {
  const [message, setMessage] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { username: e.target[0].value, password: e.target[1].value };
    const { data } = await axios.post("/login", user);
    if (data.isAuth) {
      await localStorage.setItem("token", data.token);
      setIsRedirect(true);
    } else {
      setMessage(true);
    }
  };

  return (
    <div className={classes.loginForm}>
      <form onSubmit={loginHandler} className={classes.form}>
        {message && <p>אנא נסה להתחבר שוב</p>}
        <h1>היכנס</h1>
        <input
          type="text"
          id="usename"
          placeholder="שם משתמש"
          name="username"
        />
        <input
          type="password"
          id="password"
          placeholder="סיסמה"
          name="password"
        />
        <button type="submit">היכנס</button>
      </form>
      {isRedirect && <Navigate to="/admin" />}
    </div>
  );
}

export default withStyles(styles)(Login);
