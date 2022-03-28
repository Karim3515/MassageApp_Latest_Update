import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants/theme";

const Item_Width = SIZES.width / 1.6;
export default HomeProductCard = ({ image, title, detail, price }) => {
  return (
    <View
      style={{
        height: 90,
        width: Item_Width,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
        overflow: "hidden",
        marginTop: 10,
        marginLeft: 5,
        marginRight: 10,
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
          width: Item_Width / 3,
          height: "100%",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={image}
          style={{ width: Item_Width / 3, height: "100%" }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          marginLeft: 10,
          flex: 1,
        }}
      >
        <Text
          numberOfLines={1}
          style={{ ...FONTS.h3, textTransform: "capitalize" }}
        >
          {title}
        </Text>
        <Text numberOfLines={1} style={{ ...FONTS.body4, color: COLORS.gray }}>
          {detail}
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              fontSize: 12,
              color: COLORS.gray,
              marginRight: 5,
            }}
          >
            $
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray }}>{price}</Text>
        </View>
      </View>
    </View>
  );
};
