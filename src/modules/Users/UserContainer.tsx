import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router";
import { CardList, Button, InputTextBox } from "../../shared/components";
import { userInfo, MESSAGES } from "../../common/utils";
import { showToastr } from "../../common/actions/toastrAction";
import { getUserList } from "./actions/userActionRoot";
const headers = [
  // { label: "displayName", value: "displayName",headerImage: <ProfileIcon/> },
  { label: "Email", value: "emailId" },
  { label: "Dealer Code", value: "dealerCode" },
  { label: "Dealer Type", value: "dealerType" },
  {
    label: "Contact Number",
    value: "contactNumber",
  },
  { label: "City", value: "city" },
];
const useStyles = (theme: any) => ({
  root: {
    padding: theme.spacing(4),
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
});

class UserContainer extends React.Component<any> {
  state = {
    rowsPerPage: 10,
    pageNumber: 1,
    searchDealerValue: "",
  };
  componentDidMount() {
    this.props.getUserList(
      {
        page: this.state.pageNumber,
        results: this.state.rowsPerPage,
      }
    );
  }

  // this function inviokes when user type filter value of fname,lname,email  in the search box
  handleFilterChange = (event) => {
    this.setState({ searchDealerValue: event.target.value });
  };

  //This function is used to get the affilate list on click of search affiliate button
  getSearchResult = () => {
    this.setpageNumberAndRecords(
      this.state.pageNumber,
      this.state.rowsPerPage,
      this.state.searchDealerValue
    );
  };
  setpageNumberAndRecords = (pageNumber, rowsPerPage?, searchString?) => {
    this.setState(
      {
        rowsPerPage,
        pageNumber,
      },
      () => {
        this.props.getUserList(
          {
            page: this.state.pageNumber,
            results: this.state.rowsPerPage,
          }
        );
      }
    );
  };

  refresh = () => {};

  handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setpageNumberAndRecords(0, parseInt(event.target.value, 10));
  };
  handleChangePage = (event: object, pageNumber: number) => {
    this.setpageNumberAndRecords(pageNumber, this.state.rowsPerPage);
  };

  render() {
    const { classes, usersList } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={9} xs={"auto"} sm={"auto"}>
            <Typography variant="h3">Users List</Typography>
          </Grid>
          <Grid item md={2} xs={12} sm={12}>
            <Button
              color="secondary"
              className={classes.marginRight}
              onClick={this.refresh}
              fullWidth
              size="medium"
            >
              Refresh
            </Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <InputTextBox
              name="firstName"
              label="First Name"
              placeholder="Please Enter the first name"
              className={classes.searchInput}
              variant="outlined"
              fullWidth
              onChange={this.handleFilterChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <InputTextBox
              name="lastName"
              label="Last Name"
              placeholder="Please Enter the last name"
              className={classes.searchInput}
              variant="outlined"
              fullWidth
              onChange={this.handleFilterChange}
            />
          </Grid>

          <Grid item md={3} xs={12}>
            <InputTextBox
              name="email"
              label="Email"
              placeholder="Please Enter the email"
              className={classes.searchInput}
              variant="outlined"
              fullWidth
              onChange={this.handleFilterChange}
            />
          </Grid>
          <Grid item md={2} xs={12} sm={12}>
            <Button
              color="primary"
              className={classes.marginRight}
              onClick={this.getSearchResult}
              fullWidth
              size="medium"
            >
              Search
            </Button>
          </Grid>

          <CardList
            rowData={[]}
            headers={headers}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            handleChangePage={this.handleChangePage}
            pageNumber={this.state.pageNumber}
            rowsPerPage={this.state.rowsPerPage}
            count={5000}
          />
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showToastr: (toastrObj) => dispatch(showToastr(toastrObj)),
  getUserList: (queryParams) => dispatch(getUserList(queryParams)),
});
const mapStateToProps = (state) => ({
  dspDealerList: (state && state.users && state.users.userList) || [],
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(withRouter(UserContainer)));
