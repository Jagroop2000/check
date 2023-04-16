import {
  isHave,
  countOccurrence,
  isIdentical,
  haveSpecialCharacters,
  isEmpty,
} from "./subchecks/strings/finding";
import { isString } from "./subchecks/strings/isString";
import {
  maxLength,
  length,
  lengthOfCharacters,
} from "./subchecks/strings/lengths";

const check = {
  isString,
  maxLength,
  length,
  lengthOfCharacters,
  isHave,
  countOccurrence,
  isIdentical,
  haveSpecialCharacters,
  isEmpty,
};

export default check;
