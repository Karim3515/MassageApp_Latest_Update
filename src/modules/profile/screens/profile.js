import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseHeader, BaseView } from "../../../components";
import { COLORS, FONTS } from "../../../constants/theme";
import { CurvedImage } from "../components/CurvedImage";

export const ProfileScreen = () => {
  return (
    <BaseView>
      <View
        style={{
          height: "30%",
          backgroundColor: COLORS.lightGray,
        }}
      >
        <BaseHeader isMenu title={"Products"} />
        <CurvedImage />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            height: "70%",
            ...FONTS.h1,
          }}
        >
          Profile
        </Text>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({});
