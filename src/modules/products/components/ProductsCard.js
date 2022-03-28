import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";

const Item_Width = SIZES.width / 3 - SIZES.base * 2;
export const ProductsCard = ({ image, title, price }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        height: 150,
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
      <View
        style={{
          height: 80,
          width: "100%",
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.gray,
        }}
      >
        <Image
          source={image}
          style={{
            height: 80,
            width: "100%",
            borderRadius: 15,
          }}
        />
      </View>
      <Text
        style={{
          ...FONTS.body4,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.primary,
          textTransform: "capitalize",
        }}
      >
        {price}
      </Text>
    </View>
  );
};
