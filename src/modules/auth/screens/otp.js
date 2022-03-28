import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { BaseButton, BaseView, HeroImage } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";
import { AuthOTP } from "../components";

export const OtpScreen = ({ navigation }) => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeroImage isBack heightScale={SIZES.height < 700 ? 1 : 0.9} />
        <View style={styles.bottomView}>
          <Text style={styles.txt_forgot}>Verification</Text>
          <Text style={styles.txt_enterPhone}>
            Enter your otp verification code
          </Text>
          <AuthOTP />
          <BaseButton
            title={"Next"}
            onPress={() => navigation.navigate("newPassword")}
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
    justifyContent: "center",
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
    ...FONTS.h2,
    letterSpacing: 3,
    marginTop: 30,
    width: 250,
  },
});
