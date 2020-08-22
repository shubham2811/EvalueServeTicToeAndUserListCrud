import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme: any) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    font: "Medium 30px/39px Roboto",
    letterSpacing: 0.84,
  },
  button: {
    color: "white",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    borderRadius: "0px 0px 0px 0px",
  },
  active: {
    color: "white",
    fontWeight: "bold",
    "& $icon": {
      color: "white",
    },
  },
}));

const CustomRouterLink = forwardRef((props: any, ref: any) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <NavLink {...props} />
  </div>
));

const SidebarNav = (props) => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();
  return (
    <List {...rest} className={clsx(className)}>
      {pages.map((page) => {
        return (
          <ListItem className={classes.item} disableGutters key={page.title}>
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              {page.title}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SidebarNav;
