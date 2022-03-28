import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseHeader, BaseView } from "../../../components";
import icons from "../../../constants/icons";
import { Card } from "../components/card";

export const NotificationScreen = () => {
  return (
    <BaseView>
      <BaseHeader isBack title={"Notifications"} />
      <View style={styles.bottom_view}>
        <Card />
        <Card />
        <Card />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  bottom_view: {
    padding: 15,
  },
});
