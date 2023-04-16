import { HAVE_SPECIAL_CHARACTERS } from "../../consts/consts";

/**
 *
 * @param str
 * @param word
 * @returns boolean
 * @description : This will check if string have particular word in it or not
 */
export const isHave = (str: string, word: string) => {
  return str.indexOf(word) != -1;
};

/**
 *
 * @param str
 * @param word
 * @returns number
 * @description : This function will return the count of occurrence of parrticular word
 */
export const countOccurrence = (str: string, word: string) => {
  const regex = new RegExp(word, "gi");
  const occurrences = str.match(regex);
  if (occurrences) {
    return occurrences.length;
  } else {
    return 0;
  }
};

/**
 *
 * @param strOne
 * @param strTwo
 * @returns boolean
 * @description : This function will check if two strings are equal or not
 */
export const isIdentical = (strOne: string, strTwo: string) => {
  return strOne === strTwo;
};

/**
 *
 * @param str
 * @returns boolean
 * @description : This function will check if string contain special character or not
 */
export const haveSpecialCharacters = (str: string) => {
  let regex = HAVE_SPECIAL_CHARACTERS;
  return str.match(regex) != null;
};

/**
 *
 * @param str
 * @returns boolean
 * @description : This function will check if string is empty or not
 */
export const isEmpty = (str: string) => {
  return str.length === 0;
};
