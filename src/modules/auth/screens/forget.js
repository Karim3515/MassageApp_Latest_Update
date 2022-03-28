import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  BaseButton,
  BaseInput,
  BaseView,
  HeroImage,
} from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";

export const ForgetScreen = ({ navigation }) => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeroImage isBack heightScale={SIZES.height < 700 ? 1 : 0.9} />
        <View style={styles.bottomView}>
          <Text style={styles.txt_forgot}>Forgot Password</Text>
          <Text style={styles.txt_enterPhone}>
            Enter Your Registered Phone no
          </Text>
          <BaseInput
            placeholder={"Enter Your Phone No..."}
            otherStyles={styles.input}
          />
          <BaseButton
            title={"Next"}
            onPress={() => navigation.navigate("otp")}
          />
        </View>
      </ScrollView>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  bottomView: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  txt_forgot: {
    color: COLORS.black,
    ...FONTS.body2,
    marginTop: 20,
  },
  txt_enterPhone: {
    color: COLORS.gray,
    marginTop: 5,
  },
  input: {
    marginTop: 60,
  },
});
