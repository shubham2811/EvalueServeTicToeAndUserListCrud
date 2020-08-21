const ValidationConstants = {
  // To Verify alpha characters (A-Za-z), digits and -, ., $, /, +, %,  and space require for Scan Code(Add Worker)
  ALPHA_NUMERIC_WITH_SOME_SPECIAL_CHAR: /^[a-z0-9]+$/i,
  IMAGE_ONLY_REGEX:/\.(gif|jpe?g|tiff|png|webp|bmp)$/i,
  PANCARD_ONLY_REGEX:/([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
  ADHAR_REGEX:/^\d{12}$/,
  GST_NO_ONLY:/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
 //eslint-disable-next-line
  EMAIL_REGEX: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/,
  MAX_LENGTH: {
    NUM_10: 10,
    NUM_6: 6,
    NUM_15:15,
    NUM_12:12
  },
  NUMBER_REGEX: /^\d+$/,
  TEXT_REGEX:/^[a-zA-Z ]*$/,
  PINCODE_REGEX: /^[1-9][0-9]{5}$/,
  PHONE_NUMBER:/^(\+\d{1,3}[- ]?)?\d{10}$/
};

export { ValidationConstants };
