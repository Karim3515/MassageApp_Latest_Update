import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, View, Text, Image, ActivityIndicator } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";
import { BaseIcon } from "./BaseIcon";

export const BaseButton = ({
  title,
  onPress,
  icon,
  otherStyles,
  disabled = false,
  textStyles,
  loading = false,
  Righticon,
  iconStyles,
  leftIconStyles,
  iconOrgColor,
  iconColor,
  iconSize,
}) => {
  return (
    // <LinearGradient
    //   start={{ x: 0.9, y: 0.9 }}
    //   colors={[COLORS.primary, COLORS.primary_second, COLORS.primary_third]}
    //   style={[
    //     {
    //       width: "100%",
    //       height: 45,
    //       alignItems: "center",
    //       flexDirection: "row",
    //       marginTop: 10,
    //       borderRadius: 10,
    //     },
    //     otherStyles,
    //   ]}
    // >
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.3)" }}
      disabled={loading}
      onPress={onPress}
      style={[
        {
          width: "100%",
          height: 45,
          alignItems: "center",
          flexDirection: "row",
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: COLORS.primary,
        },
        otherStyles,
      ]}
    >
      {icon && (
        <View style={[{ marginLeft: 20, marginRight: 10 }, leftIconStyles]}>
          <Image
            source={icon}
            style={[
              {
                height: 20,
                width: 20,
              },
              !iconOrgColor && {
                tintColor: iconColor ? iconColor : COLORS.white,
              },
            ]}
          />
        </View>
      )}
      <Text
        style={[
          {
            ...FONTS.h3,
            color: "white",
            textAlign: !icon ? "center" : null,
            flex: 1,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
      {Righticon && (
        <View style={iconStyles}>
          <BaseIcon icon={Righticon} size={iconSize} color={iconColor} />
        </View>
      )}
      <View
        style={{
          position: "absolute",
          right: 15,
        }}
      >
        <ActivityIndicator
          animating={!disabled && loading ? true : false}
          size="small"
          color={COLORS.white}
        />
      </View>
    </Pressable>
    // </LinearGradient>
  );
};
