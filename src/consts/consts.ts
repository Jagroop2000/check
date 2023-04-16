export const SINGLE_SPACE_REGEX = /\s+/g;
export const HAVE_SPECIAL_CHARACTERS = /[!@#$%^&*(),.?":{}|<>]/;
export const EMAIL_VALIDATOR_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_VALIDATOR =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
export const FIRST_LAST_NAME_REGEX = /^[A-Za-z]+([A-Za-z\s]+)*$/;
