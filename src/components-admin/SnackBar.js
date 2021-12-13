import {forwardRef, useState} from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar({ data }) {
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        onClick={handleClose}
      >
        <Alert severity={data.success ? "info" : "error"}>{data.message}</Alert>
      </Snackbar>
    </div>
  );
}
