import {
  EMAIL_VALIDATOR_REGEX,
  FIRST_LAST_NAME_REGEX,
  PASSWORD_VALIDATOR,
} from "../../consts/consts";

/**
 *
 * @param value
 * @returns boolean
 * @description : This function will validate that the field is required
 */
export const isRequired = (value: any) => (value === "" ? false : true);

/**
 *
 * @param str
 * @param min
 * @param max
 * @returns This function is used to check if length of string is between the min and max value
 *           For example : it is used to check username length is between 5 and 25
 */
export const isBetween = (str: string, min: number, max: number) =>
  str.length < min || str.length > max ? false : true;

/**
 *
 * @param email
 * @returns boolean
 * @description : This function is used validate email
 */
export const isEmailValid = (email: string) => {
  const re = EMAIL_VALIDATOR_REGEX;
  return re.test(email);
};

/**
 * 
 * @param password 
 * @returns boolean
 * @description : This function is used to validate password and must follow  below rules :
 *  The password must contain at least one lowercase character
    The password must contain at least one uppercase character
    The password must contain at least one number
    The password must contain at least one special character.
    The password must be eight characters or longer
 */
export const isPasswordSecure = (password: string) => {
  const regx = new RegExp(PASSWORD_VALIDATOR);
  return regx.test(password);
};

/**
 *
 * @param firstName
 * @returns boolean
 * @description : This function will test the valid firstname
 */
export const isValidFirstName = (firstName: string) => {
  const regx = FIRST_LAST_NAME_REGEX;
  return regx.test(firstName);
};

/**
 *
 * @param lastName
 * @returns boolean
 * @description : This function will test the valid lastName
 */
export const isValidLastName = (lastName: string) => {
  const regx = FIRST_LAST_NAME_REGEX;
  return regx.test(lastName);
};
