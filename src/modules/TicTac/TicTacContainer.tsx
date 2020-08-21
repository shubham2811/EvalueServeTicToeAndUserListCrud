import React from "react";
import  Grid from "@material-ui/core/Grid";
import  withStyles from "@material-ui/styles/withStyles";
import { connect } from "react-redux";
const useStyles = (theme: any) => ({
  root: {
    padding: theme.spacing(4),
  },
  avatar: {
    width: '100%',
    height: '100%'
  }
});
class TicTacContainer extends React.Component<any> {
  componentDidMount() {
  }

  render() {
    const { classes, accountDetails } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
       Tic tac game container
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
});
const mapStateToProps = (state) => ({
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(TicTacContainer));
