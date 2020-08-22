import IDropdownProps from "./iDropdownProps";
import * as React from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
/**
 * Material UI text filed control
 */
const MaterialSelect = ({
  input: { value, ...restInput },
  label,
  meta: { touched, error },
  variant,
  margin,
  type,
  shrink,
  options,
  name,
  ...custom
}) => {
  return (
    <TextField
      InputLabelProps={{
        shrink,
      }}
      select
      name={name}
      color="secondary"
      label={label}
      variant={variant}
      onChange={(val) => {
        restInput.onChange(val);
      }}
      helperText={touched && error}
      error={touched && !!error}
      margin={margin || "normal"}
      type={type}
      value={value}
      {...restInput}
      {...custom}
    >
      {options.map((option: any) => {
        return (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export const DropDown: React.SFC<IDropdownProps> = (props) => {
  const {
    options,
    isformfield,
    validation,
    name,
    label,
    margin,
    variant,
    placeholder,
    onChange,
    fullWidth,
    className,
    shrink,
    value,
  } = props;
  return !isformfield ? (
    <TextField
      name={name}
      label={label}
      color="secondary"
      margin={margin || "normal"}
      variant={variant || "outlined"}
      onChange={(val) => onChange(val)}
      fullWidth={fullWidth}
      className={className}
      value={value}
      select
      InputLabelProps={{
        shrink: shrink,
      }}
    >
      {options &&
        options.map((option: any) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
    </TextField>
  ) : (
    <Field
      name={name}
      label={label}
      placeholder={placeholder}
      component={MaterialSelect}
      validate={validation}
      variant={variant || "outlined"}
      fullWidth={fullWidth}
      className={className}
      shrink={shrink}
      options={options}
    />
  );
};
