import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  BaseInput,
  BaseView,
  BaseButton,
  HeroImage,
} from "../../../components";
import { COLORS, FONTS } from "../../../constants/theme";

export const NewPasswordScreen = ({ navigation }) => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeroImage isBack />
        <View style={styles.bottomView}>
          <Text style={styles.txt_forgot}>New Password</Text>
          <Text style={styles.txt_enterPhone}>Create Your New Password</Text>
          <BaseInput placeholder={"New Password"} otherStyles={styles.input} />
          <BaseInput placeholder={"Confirm New Password"} />
          <BaseButton
            title={"Next"}
            otherStyles={styles.btn_next}
            onPress={() => navigation.navigate("signin")}
          />
        </View>
      </ScrollView>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  txt_forgot: {
    color: COLORS.black,
    ...FONTS.h2,
    marginTop: 20,
  },
  txt_enterPhone: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginTop: 5,
  },
  input: {
    marginTop: 30,
  },
  btn_next: {
    marginTop: 30,
  },
});
