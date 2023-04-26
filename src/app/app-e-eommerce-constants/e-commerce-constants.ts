export const RegexValidators = {
  VAT_REGISTRATION_NUMBER: /^3[(0-9)*]{13}3$/,
  ARABIC_CHARACTER: /^[\u0600-\u06FF\u0750-\u077F +]/,
  ENGLISH_CHARACTER: /^[a-zA-Z]+$/,
  SAUDI_MOBILE_NO: /^(009665|9665|\+9665|05|5|)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/,
  EMAIL: /^([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+/,
  FAX: /^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$/,
  FOUR_DIGIT: /^\d{4}$/,
  FIVE_DIGIT: /^\d{5}$/,
  SERIAL_NUMBER: /^1-(.+)|2-(.+)|3-(.+)/,
  PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};