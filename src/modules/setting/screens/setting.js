import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseView } from "../../../components";
import { FONTS } from "../../../constants/theme";

export const SettingScreen = () => {
  return (
    <BaseView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            ...FONTS.h1,
          }}
        >
          Settings
        </Text>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({});
