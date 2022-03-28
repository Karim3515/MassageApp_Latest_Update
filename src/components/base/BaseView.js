import React from "react";
import { View } from "react-native";
import { COLORS } from "../../constants/theme";

export const BaseView = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}
    >
      {children}
    </View>
  );
};
