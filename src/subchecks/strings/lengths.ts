import { SINGLE_SPACE_REGEX } from "../../consts/consts";

/**
 *
 * @param str
 * @param maxLen
 * @returns boolean
 * @description : This function will check if length of the string is equal or less than the provided length
 */
export const maxLength = (str: string, maxLen: number) => {
  return str.length <= maxLen;
};

/**
 *
 * @param str
 * @returns boolean
 * @description : This function will return the length of the string
 */
export const length = (str: string) => {
  return str.length;
};

/**
 *
 * @param str
 * @returns This function will return the length of string by removing spaces in the string
 */
export const lengthOfCharacters = (str: string) => {
  const lengthWithoutString: string = str.replace(SINGLE_SPACE_REGEX, "");
  return lengthWithoutString.length;
};
