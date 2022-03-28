import React from "react";
import { View, TextInput } from "react-native";
import { COLORS, FONTS } from "../../../constants/theme";

export const AuthOTP = ({ ...otherProps }) => (
  <View
    style={{
      width: 200,
      backgroundColor: COLORS.lightGray,
      height: 45,
      borderWidth: 1,
      borderColor: COLORS.gray,
      borderRadius: 30,
      marginVertical: 10,
    }}
  >
    <TextInput
      maxLength={6}
      autoCapitalize="none"
      keyboardType="numeric"
      placeholder="123456"
      autoCorrect={false}
      style={{
        flex: 1,
        ...FONTS.h2,
        justifyContent: "center",
        color: COLORS.black,
        paddingHorizontal: 15,
        textAlign: "center",
        letterSpacing: 15,
      }}
      placeholderTextColor={COLORS.gray}
      {...otherProps}
    />
  </View>
);
