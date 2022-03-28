import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseHeader, BaseView } from "../../../components";
import { FONTS } from "../../../constants/theme";

export const CartScreen = () => {
  return (
    <BaseView>
      <BaseHeader isMenu title={"Cart"} />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            ...FONTS.h1,
          }}
        >
          Cart
        </Text>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({});
