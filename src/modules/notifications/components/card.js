import React from "react";
import { View, Text } from "react-native";
import { BaseButton } from "../../../components";
import { COLORS, FONTS } from "../../../constants/theme";
export const Card = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        width: "100%",
        padding: 15,
        borderRadius: 15,
        marginVertical: 8,
      }}
    >
      <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Welcome</Text>
      <Text style={{ color: COLORS.gray, ...FONTS.body4, marginTop: 5 }}>
        Welcome to Massage app
      </Text>
      <BaseButton title={"Remove"} />
    </View>
  );
};
