import React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { COLORS, FONTS } from "../../constants/theme";

export const BaseCheckBox = ({
  children,
  onValueChange,
  otherStyles,
  ...otherProps
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onValueChange()}>
      <View style={[{ flexDirection: "row", marginTop: 10 }, otherStyles]}>
        <Checkbox
          onValueChange={() => onValueChange()}
          {...otherProps}
          style={{
            borderColor: COLORS.gray,
            height: 20,
            width: 20,
          }}
        />
        <Text
          style={{
            ...FONTS.body4,
            marginLeft: 10,
            color: COLORS.gray,
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
