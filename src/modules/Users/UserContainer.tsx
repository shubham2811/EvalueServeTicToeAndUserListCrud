import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router";
import {
  CardList,
  Button,
  InputTextBox,
  Tables,
} from "../../shared/components";
import { showToastr } from "../../common/actions/toastrAction";
import {
  getUserList,
  addUser,
  editUser,
  deleteUser,
} from "./actions/userActionRoot";
import AddEditUser from "./AddEditUser";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
const headers = [
  { label: "Email", value: "email" },
  { label: "Gender", value: "gender" },
  { label: "Phone", value: "phone" },
  { label: "Age", value: "age" },
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
    showCardView: true,
    isFilterApplied: false,
    filteredList: [],
    actionType: null,
    searchObj: {
      firstName: "",
      lastName: "",
      email: "",
    },
    showAddEditModal: false,
    userData: {},
  };
  componentDidMount() {
    this.props.getUserList({
      page: this.state.pageNumber,
      results: this.state.rowsPerPage,
    });
  }

  // this function inviokes when user type filter value of fname,lname,email  in the search box
  handleFilterChange = (event) => {
    this.setState({
      searchObj: {
        ...this.state.searchObj,
        [event.target.name]: event.target.value,
      },
    });
  };

  //This function is used to search by using filter
  getSearchResult = () => {
    const {
      searchObj,
      // searchObj: { firstName, lastName, email },
    } = this.state;
    const filterKeys = Object.keys(searchObj);
    const filteredArray = this.props.userList.filter((eachObj) => {
      return filterKeys.every((eachKey) => {
        if (!searchObj[eachKey].length) {
          return true; // passing an empty filter means that filter is ignored.
        }
        return searchObj[eachKey].includes(eachObj[eachKey]);
      });
    });
    this.setState({ filteredList: filteredArray, isFilterApplied: true });
  };

  setpageNumberAndRecords = (pageNumber, rowsPerPage?) => {
    this.setState(
      {
        isFilterApplied: false,
        searchObj: {
          ...this.state.searchObj,
          firstName: "",
          lastName: "",
          email: "",
        },
        filteredList: [],
        rowsPerPage,
        pageNumber,
      },
      () => {
        this.props.getUserList({
          page: this.state.pageNumber,
          results: this.state.rowsPerPage,
        });
      }
    );
  };

  refresh = () => {
    this.props.getUserList({
      page: 1,
      results: 10,
    });
    this.setState({
      filteredList: [],
      isFilterApplied: false,
      searchObj: {
        ...this.state.searchObj,
        firstName: "",
        lastName: "",
        email: "",
      },
    });
  };

  handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setpageNumberAndRecords(0, parseInt(event.target.value, 10));
  };
  handleChangePage = (event: object, pageNumber: number) => {
    this.setpageNumberAndRecords(pageNumber, this.state.rowsPerPage);
  };
  renderButtons = () => {
    return [
      {
        label: "EDIT",
      },
      {
        label: "DELETE",
      },
    ];
  };
  handleEditDelete = (rowData, actionType) => {
    if (actionType === "EDIT") {
      this.setState({ showAddEditModal: true, userData: rowData, actionType });
    } else if (actionType === "DELETE") {
      this.props.deleteUser(rowData);
    }
  };

  handleClose = () => {
    this.setState({ showAddEditModal: false, userData: null });
  };
  addUser = () => {
    this.setState({
      showAddEditModal: true,
      userData: null,
      actionType: "ADD",
    });
  };
  handleSubmitUser = (data) => {
    this.setState({ showAddEditModal: false });
    const { actionType } = this.state;
    const { firstName, lastName, email, gender, age, phone } = data;
    const obj = {
      name: {
        first: firstName,
        last: lastName,
      },
      dob: {
        age: age,
      },
      email: email,
      phone: phone,
      gender: gender,
      picture: {
        thumbnail: data.profileUrl,
      },
    };
    if (actionType === "EDIT") {
      this.props.editUser({ ...obj, cell: data.cell });
    } else {
      this.props.addUser({ ...obj, cell: Math.random() });
    }
  };

  handleViewChange = (event) => {
    this.setState({ showCardView: event.target.checked });
  };
  render() {
    const { classes, userList } = this.props;
    const {
      filteredList,
      userData,
      showCardView,
      showAddEditModal,
      actionType,
      isFilterApplied,
      searchObj: { firstName, lastName, email },
    } = this.state;
    // console.log('userList',userList);
    // console.log('filteredList',filteredList);
    // console.log('firstName',firstName);
    // console.log(this.state.searchObj);

    return (
      <div className={classes.root}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={3} xs={"auto"} sm={"auto"}>
            <Typography variant="h3">Users List</Typography>
          </Grid>
          <Grid item md={3} xs={12} sm={12}>
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
          <Grid item md={3} xs={12} sm={12}>
            <Button
              color="primary"
              className={classes.marginRight}
              onClick={this.addUser}
              fullWidth
              size="medium"
            >
              Add User
            </Button>
          </Grid>
          <Grid item md={3} xs={12} sm={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={showCardView}
                  onChange={this.handleViewChange}
                
                />
              }
              label="Show Card View"
            />
          </Grid>

          <Grid item md={3} xs={12}>
            <InputTextBox
              name="firstName"
              label="First Name"
              placeholder="Please Enter the first name"
              className={classes.searchInput}
              variant="outlined"
              fullWidth
              value={firstName}
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
              value={lastName}
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
              value={email}
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
          {showCardView ? (
            <CardList
              rowData={isFilterApplied ? filteredList : userList}
              headers={headers}
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
              handleChangePage={this.handleChangePage}
              pageNumber={this.state.pageNumber}
              rowsPerPage={this.state.rowsPerPage}
              renderActionButtons={this.renderButtons()}
              handleActionButtonClick={this.handleEditDelete}
              count={5000}
            />
          ) : (
            <Tables
              rowData={isFilterApplied ? filteredList : userList}
              headers={headers}
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
              handleChangePage={this.handleChangePage}
              pageNumber={this.state.pageNumber}
              rowsPerPage={this.state.rowsPerPage}
              renderActionButtons={this.renderButtons()}
              handleActionButtonClick={this.handleEditDelete}
              count={5000}
            />
          )}
        </Grid>
        {showAddEditModal && (
          <AddEditUser
            handleSubmitUser={this.handleSubmitUser}
            actionType={actionType}
            userData={userData}
            handleClose={this.handleClose}
            isOpen={showAddEditModal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showToastr: (toastrObj) => dispatch(showToastr(toastrObj)),
  getUserList: (queryParams) => dispatch(getUserList(queryParams)),
  addUser: (data) => dispatch(addUser(data)),
  editUser: (data) => dispatch(editUser(data)),
  deleteUser: (data) => dispatch(deleteUser(data)),
});
const mapStateToProps = (state) => ({
  userList:
    (state &&
      state.user &&
      state.user.userList.map((item) => {
        item.displayName = `${item.name.first} ${item.name.last}`;
        item.firstName = item.name.first;
        item.lastName = item.name.last;
        item.age = `${item.dob && item.dob.age}`;
        item.profileUrl = item.picture.thumbnail;
        return item;
      })) ||
    [],
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(withRouter(UserContainer)));
