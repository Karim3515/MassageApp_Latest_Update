import React from "react";
import { View, Text } from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONTS } from "../../constants/theme";
import { BaseIcon } from "./BaseIcon";
export const BaseSearch = ({ otherStyles }) => {
  return (
    <View
      style={[
        {
          marginTop: 10,
          height: 45,
          width: "100%",
          borderRadius: 50,
          backgroundColor: COLORS.white,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingLeft: 15,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        },
        otherStyles,
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        {/* <BaseIcon icon={icons.search} color={COLORS.gray} size={22} /> */}
        <Text
          style={{
            ...FONTS.body4,
            marginLeft: 5,
            color: COLORS.gray,
          }}
        >
          Search...
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          backgroundColor: COLORS.primary,
          alignItems: "center",
          justifyContent: "center",
          borderColor: COLORS.lightGray,
          borderWidth: 4,
        }}
      >
        <BaseIcon icon={icons.search} color={COLORS.white} size={20} />
      </View>
    </View>
  );
};
