import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
// import games91logo from "../../../../../assets/images/games91logo.png";
import { useHistory } from "react-router-dom";
import { Button } from "../../../../../shared/components";
import { Typography, Grid, Badge } from "@material-ui/core";
import InputIcon from '@material-ui/icons/Input';
import { MESSAGES } from "../../../../utils";
import { showToastr } from "../../../../actions/toastrAction";
import { connect } from "react-redux";
const useStyles = makeStyles((theme: any) => ({
  root: {
    boxShadow: "none",
  },
  logo: {
    height: "45px",
  },
  backColor: {
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    color: "white",
    marginLeft: theme.spacing(-19),
  },
}));

const Topbar = (props) => {
  const history = useHistory();
  const { className, onSidebarOpen, backColor, ...rest } = props;

  const classes = useStyles();
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, classes.backColor, className)}
    >
      <Toolbar>
        <Grid item md={4}>
          <RouterLink to="/">
            {/* <img className={classes.logo} alt="Logo" src={games91logo} /> */}
          </RouterLink>
        </Grid>
        <Grid
          container
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Hidden mdDown>
            <Typography variant="h3" className={classes.heading}>
              {" "}
             Evalue Serve Dashboard
            </Typography>
          </Hidden>
        </Grid>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
const mapDispatchToProps = (dispatch) => ({
  showToastr: (toastrObj) => dispatch(showToastr(toastrObj)),
});
export default connect(
  null,
  mapDispatchToProps
)(Topbar);
