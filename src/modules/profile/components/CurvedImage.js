import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import { BaseHeader } from "../../../components";
import icons from "../../../constants/icons";
import { COLORS, SIZES } from "../../../constants/theme";

const item_size = SIZES.width * 2;

export const CurvedImage = ({ logo, isBack }) => {
  const navigation = useNavigation();

  return (
    <>
      <LinearGradient
        start={{ x: 1, y: 1.5 }}
        colors={[COLORS.primary, COLORS.primary, COLORS.primary_third]}
        style={{
          width: item_size,
          height: item_size,
          position: "absolute",
          left: -item_size / 3.2,
          bottom: 20,
          borderRadius: item_size / 5,
          backgroundColor: COLORS.primary,
          transform: [{ rotate: "-40deg" }],
        }}
      ></LinearGradient>
    </>
  );
};
