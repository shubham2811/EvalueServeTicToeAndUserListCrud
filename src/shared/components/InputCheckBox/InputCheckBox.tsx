import * as React from "react";
import { Field } from "redux-form";

import  Checkbox from "@material-ui/core/Checkbox";
import {
  FormControlLabel,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
/**
 *
 * Material UI text filed control
 */

const renderCheckbox = ({
  input: { value, ...restInput },
  label,
  meta: { touched, error },
  name,
  ...custom
}) => {
  return (
      <FormControl error={touched && !!error} {...custom}>
        <FormControlLabel
          control={<Checkbox onChange={restInput.onChange} name={name} />}
          label={label}
        />

        {touched && error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
  
  );
};

export const InputCheckBox: React.SFC<any> = (props) => {
  return !props.isformfield ? (
    <FormControl>
    <FormControlLabel
      control={<Checkbox onChange={props.onChange} name={props.name} />}
      label={props.label}
    />
  </FormControl>

  ) : (
    <Field
      name={props.name}
      label={props.label}
      type={"checkbox"}
      placeholder={props.placeholder}
      required={props.required}
      component={renderCheckbox}
      validate={props.validation}
    />
  );
};
