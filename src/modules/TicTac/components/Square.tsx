import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: any) => ({
  square: {
    display: "block",
    width: "80px",
    height: "80px",
    border: "1px solid #e4e4e4",
    color:  theme.palette.secondary.main,
    fontSize: "3em",
    fontWeight: "bold",
    textAlign: "center",
    padding: "0px",
    background:theme.palette.white
  },
  highlight: {
    background:  theme.palette.success.dark,
  },
}));
const Square = (props) => {
  const classes = useStyles();
  const highLight = props.highlight ? classes.highlight : "";
  return (
    <button
      className={`${classes.square} ${highLight}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
