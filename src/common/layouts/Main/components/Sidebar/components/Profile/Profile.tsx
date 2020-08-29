import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: any) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
    color: "white",
    fontWeight: "bold",
  },
}));

const Profile = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={"alt"}
        className={classes.avatar}
      />
      <Typography className={classes.name} variant="h6">
        Evalueserve
      </Typography>
    </div>
  );
};
export default Profile;
