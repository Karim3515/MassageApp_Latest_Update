import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  BaseButton,
  BaseInput,
  BaseView,
  HeroImage,
} from "../../../components";
import icons from "../../../constants/icons";
import { COLORS, FONTS } from "../../../constants/theme";

export const SigninScreen = ({ navigation }) => {
  return (
    <BaseView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <HeroImage isBack />
        <View style={styles.bottom}>
          <BaseInput placeholder={"Email or Phone"} />
          <BaseInput placeholder={"Password"} />
          <TouchableOpacity
            style={styles.forgetBtn}
            onPress={() => navigation.navigate("forget")}
          >
            <Text style={styles.forgetTxt}>Forgot Password?</Text>
          </TouchableOpacity>
          <BaseButton
            title={"Login"}
            otherStyles={{ marginTop: 40 }}
            onPress={() => navigation.navigate("login")}
          />
          <Text style={styles.txt_or}>Or</Text>
          <BaseButton
            icon={icons.google}
            iconOrgColor
            title={"Login With Google"}
            otherStyles={styles.btn_signup}
            textStyles={{ color: COLORS.primary }}
          />
          <BaseButton
            title={"Login With Facebook"}
            icon={icons.facebook}
            iconOrgColor
            otherStyles={styles.btn_signup}
            textStyles={{ color: COLORS.primary }}
          />
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

  btn_signup: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  forgetBtn: {
    marginTop: 10,
    width: "100%",
  },
  forgetTxt: {
    ...FONTS.h2,
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
    textAlign: "right",
  },
  txt_or: {
    marginTop: 10,
    color: COLORS.black,
    ...FONTS.body3,
  },
});
