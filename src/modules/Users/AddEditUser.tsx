import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/styles/withStyles";
import { Modal, Button, Form, InputTextBox, DropDown } from "../../shared/components";
import { required, regexValidation, ValidationConstants, maxLength } from "../../common/utils";

const useStyles = (theme: any) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  marginRight: {
    marginRight: theme.spacing(1),
  },
});
class AddEditUser extends React.PureComponent<any> {
  render() {
    const { isOpen, handleClose, classes,userData,actionType,handleSubmitUser } = this.props;
    return (
      <Modal
        handleClose={handleClose}
        isOpen={isOpen}
        title={actionType === 'EDIT' ? "Edit User" : "Add User"}
        fullScreen
      >
        <Card>
          <CardContent>
            <Form
              className={classes.form}
              form="userForm"
              onSubmit={handleSubmitUser}
              initialValues={actionType === 'EDIT' ? userData : {}}
            >
              <Grid container spacing={2}>
                <Grid item md={3} xs={12} sm={12}>
                    <InputTextBox
                      name="firstName"
                      label="First Name"
                      placeholder="Please Enter First Name"
                      fullWidth
                      variant="outlined"
                      validation={[required("First Name"),
                      maxLength(ValidationConstants.MAX_LENGTH.NUM_15),
                      regexValidation(
                        ValidationConstants.TEXT_REGEX,
                        "Please enter Text only"
                      ),
                    ]}
                      isformfield={true}
                    />
                 </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="lastName"
                    label="Last Name"
                    placeholder="Please Enter Last Name"
                    fullWidth
                    variant="outlined"
                    validation={[required("lastName"),
                    regexValidation(
                      ValidationConstants.TEXT_REGEX,
                      "Please enter Text only"
                    ),
                    maxLength(ValidationConstants.MAX_LENGTH.NUM_15),
                  ]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="email"
                    label="Email"
                    placeholder="Please Enter Email"
                    fullWidth
                    variant="outlined"
                    validation={[required("email"),
                    regexValidation(
                      ValidationConstants.EMAIL_REGEX,
                      "Please enter valid Email"
                    ),
                  ]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="phone"
                    label="Phone"
                    placeholder="Please Enter Phone Number"
                    fullWidth
                    variant="outlined"
                    validation={[ required("PhoneNumber"),
                  
                  ]}
                    isformfield={true}
                  />
                </Grid>
                <Grid item md={3} xs={12} sm={12}>
                    <DropDown
                      name="gender"
                      label="Gender"
                      validation={[required("Gender")]}
                      isformfield={true}
                      fullWidth
                      options={[
                        { name: "Female", id: 'female' },
                        { name: "Male", id: 'male' },
                      ]}
                    />
                  </Grid>

                  <Grid item md={3} xs={12} sm={12}>
                  <InputTextBox
                    name="age"
                    label="Age"
                    placeholder="Please Enter Age"
                    fullWidth
                    variant="outlined"
                    validation={[ required("age"),
                    maxLength(ValidationConstants.MAX_LENGTH.NUM_3),
                    regexValidation(
                      ValidationConstants.NUMBER_REGEX,
                      "Age is Invalid"
                    ),
                  ]}
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
export default withStyles(useStyles)(AddEditUser)
