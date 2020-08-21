import { IInputTextBoxProps } from "./iInputTextBoxProps";
import * as React from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
/**
 *
 * Material UI text filed control
 */
const TextBox = ({
  input: { value, ...restInput },
  label,
  meta: { touched, error },
  variant,
  margin,
  type,
  shrink,
  name,
  showEyeIcon,
  ...custom
}) => {
  const [values, setValues] = React.useState<any>({
    showPassword: false
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return showEyeIcon ? (
    <TextField
      InputLabelProps={{
        shrink,
      }}
      
      name={name}
      label={label}
      variant={variant}
      onChange={(val) => {
        restInput.onChange(val);
      }}
      helperText={touched && error}
      error={touched && !!error}
      margin={margin || "normal"}
      type={type !== "file" &&  values.showPassword ? "text" : "password"}
      value={type !== "file" ? value : undefined}
      color="secondary"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...restInput}
      {...custom}
    />
  ) : (
    <TextField
      InputLabelProps={{
        shrink,
      }}
      color="secondary"
      name={name}
      label={label}
      variant={variant}
      onChange={(val) => {
        restInput.onChange(val);
      }}
      helperText={touched && error}
      error={touched && !!error}
      margin={margin || "normal"}
      type={type}
      value={type !== "file" ? value : undefined}
      {...restInput}
      {...custom}
    />
  );
};

export const InputTextBox: React.SFC<IInputTextBoxProps> = (props) => {
  return !props.isformfield ? (
    <TextField
      name={props.name}
      type={props.type || "text"}
      label={props.label}
      margin={props.margin || "normal"}
      variant={(props.variant as any) || "outlined"}
      placeholder={props.placeholder}
      onChange={(val) => props.onChange(val)}
      fullWidth={props.fullWidth}
      className={props.className}
      color="secondary"
      InputLabelProps={{
        shrink: props.shrink,
      }}
    />
  ) : (
    <Field
      name={props.name}
      label={props.label}
      type={props.type || "text"}
      placeholder={props.placeholder}
      required={props.required}
      component={TextBox}
      validate={props.validation}
      variant={props.variant}
      fullWidth={props.fullWidth}
      className={props.className}
      shrink={props.shrink}
      showEyeIcon={props.showEyeIcon}
    />
  );
};
