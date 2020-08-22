import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/styles/makeStyles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { Profile, SidebarNav } from "./components";

const useStyles = makeStyles((theme: any) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: "#0B357D",
    color: "red",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
    borderTop: "2px solid #285095",
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  fontColor: {
    color: "white",
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();
  const pages = [
    {
      title: "Users",
      href: "/users",
    },
    {
      title: "Tik-Tac-Toe",
      href: "/tic-tac-toe",
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
