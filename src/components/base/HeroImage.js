import React from "react";
import { ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import icons from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { BaseIcon } from "./BaseIcon";

export const HeroImage = ({ isBack, heightScale = 1.1 }) => {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={require("../../assets/bg_image.png")}
        style={{
          width: SIZES.width,
          height: SIZES.width / heightScale,
        }}
      ></ImageBackground>
      {isBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 40,
            left: 10,
            height: 35,
            width: 35,
            borderRadius: 20,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BaseIcon icon={icons.right_arrow} size={18} />
        </TouchableOpacity>
      )}
    </>
  );
};
