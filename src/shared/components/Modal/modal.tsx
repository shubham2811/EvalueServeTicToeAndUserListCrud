import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { Button } from "../Button/button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme: any) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const DialogTitle = (props) => {
  const classes = useStyles();
  const { onClose } = props;
  return (
    <MuiDialogTitle disableTypography>
      <Typography variant="h3">{props.title}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

export const Modal = (props) => {
  const handleClose = () => {
    props.handleClose();
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullScreen={props.fullScreen || fullScreen}
      disableBackdropClick
      fullWidth={props.fullWidth}
      maxWidth={props.maxWidth}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        title={props.title}
      />

      <DialogContent>{props.children}</DialogContent>
      <DialogActions>
        {props.renderActionButtons
          ? props.renderActionButtons.map((button) => {
              return (
                <Button
                  disabled={button.disabled}
                  onClick={() => props.handleSuccessButtonClick(true)}
                  color="primary"
                  key={button.label}
                >
                  {button.label}
                </Button>
              );
            })
          : null}
      </DialogActions>
    </Dialog>
  );
};
