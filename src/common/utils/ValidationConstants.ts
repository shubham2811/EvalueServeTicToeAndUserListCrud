const ValidationConstants = {
 //eslint-disable-next-line
  EMAIL_REGEX: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/,
  MAX_LENGTH: {
    NUM_15:15,
    NUM_3:3,
    NUM_10:10
  },
  NUMBER_REGEX: /^\d+$/,
  TEXT_REGEX:/^[a-zA-Z ]*$/,
  PHONE_NUMBER:/^(\+\d{1,3}[- ]?)?\d{10}$/
};

export { ValidationConstants };
