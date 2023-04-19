/**
 *
 * @param date
 * @param style
 * @param dashtype
 * @returns string
 * @description : This function is used to format date in different formats
 */
const format = (date: any, style: string, dashtype?: string) => {
  dashtype = dashtype ? dashtype : " ";
  var formattedDate = new Date(date);
  const month =
    date.getMonth() > 8
      ? formattedDate.getMonth() + 1
      : "0" + (formattedDate.getMonth() + 1);
  const year = formattedDate.getFullYear();
  const day =
    formattedDate.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  switch (style) {
    case "MM/DD/YY":
      return `${month}${dashtype}${day}${dashtype}${year}`;
    case "DD/MM/YY":
      return `${day}${dashtype}${month}${dashtype}${year}`;
    case "YY/MM/DD":
      return `${year}${dashtype}${month}${dashtype}${day}`;
    default:
      return date;
  }
};

/**
 *
 * @param date
 * @returns month
 * @description : This function is used to get month from date
 */
const getMonth = (date: any) => {
  var formattedDate = new Date(date);
  const month =
    date.getMonth() > 8
      ? formattedDate.getMonth() + 1
      : "0" + (formattedDate.getMonth() + 1);
  return month;
};

/**
 *
 * @param date
 * @returns year
 * @description : This function is used to get year from date
 */
const getFullYear = (date: any) => {
  var formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  return year;
};
/**
 *
 * @param date
 * @returns day
 * @description : This function is used to get day from date
 */
const getDate = (date: any) => {
  var formattedDate = new Date(date);
  const day =
    formattedDate.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  return day;
};

export const dates = {
  format,
  getMonth,
  getFullYear,
  getDate,
};
