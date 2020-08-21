import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withStyles from "@material-ui/styles/withStyles";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { connect } from "react-redux";
import { Modal, Button, Form, InputTextBox } from "../../shared/components";
import { required } from "../../common/utils";

const useStyles = (theme: any) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
});
class AddEditDealer extends React.Component<any> {
  state = {
    dealerType: "INDIVIDUAL",
  };
  handleDealerType = (event) => {
    this.setState({ dealerType: event.target.value });
  };
  render() {
    const { isOpen, handleClose, classes } = this.props;
    const { dealerType } = this.state;
    return (
      <Modal
        handleClose={handleClose}
        isOpen={isOpen}
        title={"Add Dealer"}
        fullScreen
      >
        <Card>
          <CardContent>
            <Form
              className={classes.form}
              form="AddDealer"
              onSubmit={this.props.handleSaveDealer}
            >
              <Grid container spacing={2}>
                <Grid item direction="row" container md={12}>
                  <RadioGroup
                    aria-label="dealerType"
                    name="dealerType"
                    value={this.state.dealerType}
                    onChange={this.handleDealerType}
                  >
                    <Grid item md={12}>
                      <FormControlLabel
                        value="INDIVIDUAL"
                        control={<Radio />}
                        label="Register As a Individual"
                      />
                      <FormControlLabel
                        value="COMPANY"
                        control={<Radio />}
                        label="Register As a Company"
                      />
                    </Grid>
                  </RadioGroup>
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  {dealerType === "INDIVIDUAL" ? (
                    <InputTextBox
                      name="firstName"
                      label="First Name"
                      placeholder="Please Enter First Name"
                      fullWidth
                      variant="outlined"
                      validation={[required("First Name")]}
                      isformfield={true}
                    />
                  ) : (
                    <InputTextBox
                      name="companyName"
                      label="Company Name"
                      placeholder="Please Enter Company Name"
                      fullWidth
                      variant="outlined"
                      validation={[required("Company Name")]}
                      isformfield={true}
                    />
                  )}
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  {dealerType === "INDIVIDUAL" ? (
                    <InputTextBox
                      name="lastName"
                      label="Last Name"
                      placeholder="Please Enter Last Name"
                      fullWidth
                      variant="outlined"
                      validation={[required("last Name")]}
                      isformfield={true}
                    />
                  ) : (
                    <InputTextBox
                      name="typeofbusiness"
                      label="Type of Business"
                      placeholder="Please Enter Type of Business"
                      fullWidth
                      variant="outlined"
                      validation={[required("Type of Business")]}
                      isformfield={true}
                    />
                  )}
                </Grid>

                <Grid item md={3} xs={12} sm={12}>
                  {dealerType === "INDIVIDUAL" ? (
                    <InputTextBox
                      name="DOB"
                      label="DOB"
                      placeholder="Please Enter DOB"
                      fullWidth
                      variant="outlined"
                      validation={[required("DOB")]}
                      isformfield={true}
                    />
                  ) : (
                    <InputTextBox
                      name="dateofIncorporation"
                      label="Date of Incorporation"
                      placeholder="Please Enter Date of Incorporation"
                      fullWidth
                      variant="outlined"
                      validation={[required("Date of Incorporation")]}
                      isformfield={true}
                    />
                  )}
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="Address"
                    label="Address"
                    placeholder="Please Enter Address"
                    fullWidth
                    variant="outlined"
                    validation={[required("Address")]}
                    isformfield={true}
                  />
                </Grid>
                {dealerType === "INDIVIDUAL" && (
                  <Grid item md={3} xs={12} sm={12}>
                    <InputTextBox
                      name="Gender"
                      label="Gender"
                      placeholder="Please Enter Gender"
                      fullWidth
                      variant="outlined"
                      validation={[required("Gender")]}
                      isformfield={true}
                    />
                  </Grid>
                )}
                <Grid item md={3} xs={12} sm={12}>
                  {dealerType === "INDIVIDUAL" ? (
                    <InputTextBox
                      name="ProfileImage"
                      label="ProfileImage"
                      fullWidth
                      placeholder="Please Enter Gender"
                      type="file"
                      variant="outlined"
                      isformfield={true}
                      shrink={true}
                    />
                  ) : (
                    <InputTextBox
                      name="companyLogo"
                      label="companyLogo"
                      shrink={true}
                      fullWidth
                      variant="outlined"
                      type="file"
                      isformfield={false}
                    />
                  )}
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="city"
                    label="City"
                    placeholder="Please Enter City"
                    fullWidth
                    variant="outlined"
                    validation={[required("City")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="pincode"
                    label="Pincode"
                    placeholder="Please Enter Pincode"
                    fullWidth
                    variant="outlined"
                    validation={[required("Pincode")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="state"
                    label="State"
                    placeholder="Please Enter State"
                    fullWidth
                    variant="outlined"
                    validation={[required("State")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="EmailAddress"
                    label="Email Id"
                    placeholder="Please Enter Email Id"
                    fullWidth
                    variant="outlined"
                    validation={[required("Email Id")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="PhoneNumber"
                    label="Phone Number"
                    placeholder="Please Enter Phone Number"
                    fullWidth
                    variant="outlined"
                    validation={[required("PhoneNumber")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="Password"
                    label="Password"
                    type="password"
                    placeholder="Please Enter Password"
                    fullWidth
                    variant="outlined"
                    validation={[required("Password")]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="DRCCode"
                    label="DRC Code"
                    placeholder="Please Enter DRC Code"
                    fullWidth
                    variant="outlined"
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="salesCode"
                    label="Sales Code"
                    placeholder="Please Enter Sales Code"
                    fullWidth
                    variant="outlined"
                    isformfield={true}
                  />
                </Grid>

                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="agentCode"
                    label="Agent Code"
                    placeholder="Please Enter Agent Code"
                    fullWidth
                    variant="outlined"
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12} container justify="center">
                  <Button className={classes.marginRight} onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button type="submit" className={classes.marginRight}>
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </CardContent>
        </Card>
      </Modal>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({});
const mapStateToProps = (state) => ({
  // orderInfo: state && state.order && state.order.orderInfo,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(AddEditDealer));
