import React from "react";
import { View, Text } from "react-native";
import { BaseIcon } from "../../../../components";
import { COLORS, FONTS } from "../../../../constants/theme";
export const CategoryCard = ({ icon, title, active }) => {
  return (
    <View
      style={{
        marginLeft: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: active ? COLORS.primary_second : COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      {icon && (
        <BaseIcon icon={icon} color={active ? COLORS.white : COLORS.gray} />
      )}

      {title && (
        <Text
          style={{
            ...FONTS.body4,
            color: active ? COLORS.white : COLORS.gray,
            marginLeft: 5,
            textTransform: "capitalize",
          }}
        >
          {title}
        </Text>
      )}
    </View>
  );
};
