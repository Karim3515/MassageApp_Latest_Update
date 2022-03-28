import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants/theme";

const Item_Width = SIZES.width / 2 - SIZES.base * 2;
export const SubCategoryCard = ({ image, title }) => {
  return (
    <View
      style={{
        marginHorizontal: 5,
        backgroundColor: COLORS.white,
        height: 140,
        width: Item_Width,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      <Image
        source={image}
        style={{
          height: 110,
          width: "100%",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.gray,
        }}
      />
      <Text
        style={{
          ...FONTS.body4,
          marginLeft: 10,
          marginTop: 5,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
