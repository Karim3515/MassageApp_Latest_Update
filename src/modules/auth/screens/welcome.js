import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { BaseButton, BaseView, HeroImage } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <BaseView>
      <HeroImage heightScale={SIZES.height < 700 ? 1 : 0.9} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.bottom}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View>
            <BaseButton
              title={"Sign in"}
              otherStyles={{ marginTop: 40 }}
              onPress={() => navigation.navigate("signin")}
            />
            <BaseButton
              title={"Sign up"}
              otherStyles={styles.btn_signup}
              textStyles={{ color: COLORS.primary }}
              onPress={() => navigation.navigate("signup")}
            />
          </View>
        </View>
      </ScrollView>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  bottom: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    ...FONTS.h4,
    marginTop: 20,
    fontSize: 22,
    lineHeight: 28,
    color: COLORS.black,
  },
  btn_signup: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
