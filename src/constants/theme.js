import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#0b8a7f",
  primary_second: "#1daca0",
  primary_third: "#4fd6cc",
  secondary: "#ffffff",
  black: "#1E1F20",
  white: "#FFFFFF",
  lightGray: "#EFF2F5",
  gray: "#8B9097",
  error: "red",
  success: "green",
};

export const SIZES = {
  // global sizes
  base: 10,
  font: 14,
  radius: 12,
  padding: 24,
  tabSize: 55,

  //font sizezs
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  //app diementions
  width,
  height,
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, fontFamily: "Bold", lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30, fontFamily: "Bold" },
  h3: { fontSize: SIZES.h3, lineHeight: 22, fontFamily: "Bold" },
  h4: { fontSize: SIZES.h4, lineHeight: 22, fontFamily: "SemiBold" },

  body1: {
    fontSize: SIZES.body1,
    lineHeight: 36,
    fontFamily: "Regular",
  },
  body2: {
    fontSize: SIZES.body2,
    lineHeight: 30,
    fontFamily: "Regular",
  },
  body3: {
    fontSize: SIZES.body3,
    lineHeight: 22,
    fontFamily: "Regular",
  },
  body4: {
    fontSize: SIZES.body4,
    lineHeight: 22,
    fontFamily: "Regular",
  },
  body5: {
    fontSize: SIZES.body4,
    lineHeight: 22,
    fontFamily: "Light",
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
