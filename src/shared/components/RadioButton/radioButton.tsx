import * as React from "react";
import { Field } from "redux-form";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import { RadioGroup } from "@material-ui/core";

/**
 *
 * Material UI Radio Button control
 */

const RadioButton = ({ name, options, handleChange, radioValue, ...rest }) => {


  return (
    <RadioGroup
      aria-label={name}
      name={name}
      onChange={(val) => handleChange(val)}
      value={radioValue}
    >
      {options.map((item) => {
        return (
          <FormControlLabel
          key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        );
      })}
    </RadioGroup>
  );
};

export const InputRadioButton: React.SFC<any> = (props) => {
  const { name, onChange, value, options } = props;
  
  return !props.isformfield ? (
    <RadioGroup
      aria-label={name}
      name={name}
      onChange={(val) => onChange(val)}
      value={value}
    >
      {options.map((item) => {
        return (
          <FormControlLabel
          key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        );
      })}
    </RadioGroup>
  ) : (
    <Field
      name={name}
      component={RadioButton}
      handleChange={onChange}
      options={options}
      radioValue={value}
    />
  );
};
