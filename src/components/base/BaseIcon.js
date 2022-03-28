import React from "react";
import { Image } from "react-native";
import { COLORS } from "../../constants/theme";

export const BaseIcon = ({ icon, size, color, orgColor }) => {
  return (
    <Image
      source={icon}
      style={{
        height: size ? size : 20,
        width: size ? size : 20,
        tintColor: color ? color : orgColor ? null : COLORS.black,
      }}
    />
  );
};
