import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/styles/makeStyles" 
import Typography from "@material-ui/core/Typography";
import Link  from "@material-ui/core/Link";
const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
  },
  textColor: {
    color: "white",
  },
}));

const Footer = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div {...rest} className={clsx(classes.root)}>
      <Typography variant="body1">
        <Link className={classes.textColor}>
          {"Copyright ©  "}
          {`${new Date().getFullYear()} `} All Rights Reserved
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;
