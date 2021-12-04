import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function AlertDialog({
  message,
  handleCancel,
  handleSubmit,
  handleDelete,
  handlerCancelDialog,
  type,
}) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDialogSubmit = () => {
    if (type === "cancel") {
      handleCancel();
    } else if (type === "delete") {
      handleDelete();
    } else if (type === "submit") {
      handleSubmit();
    }
    setOpen(false);
  };

  const handleClose = () => {
    handlerCancelDialog();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">האתם אתה בטוח ?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            color="error"
            style={{ margin: "0.5rem" }}
          >
            לא
          </Button>
          <Button
            onClick={handleDialogSubmit}
            variant="contained"
            autoFocus
            style={{ margin: "0.5rem" }}
          >
            כן
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
