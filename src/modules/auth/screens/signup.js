import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BaseButton,
  BaseCheckBox,
  BaseHeader,
  BaseInput,
  BasePicker,
  BaseView,
} from "../../../components";
import { COLORS, FONTS } from "../../../constants/theme";
import fakePickerData from "../../../dummyData/fakePickerData";

export const SignupScreen = () => {
  const [isAgeOver18, setIsAgeOver18] = useState(false);
  const [isAgree, setIsAgree] = useState(false);

  return (
    <BaseView>
      <BaseHeader
        isBack
        otherStyles={{ backgroundColor: COLORS.lightGray }}
        title="Sign up"
      />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <BaseInput placeholder={"First Name"} otherStyles={styles.input} />
          <BaseInput placeholder={"Last Name"} otherStyles={styles.input} />
        </View>
        <BaseInput placeholder={"Email"} />
        <BaseInput placeholder={"Phone"} />
        <BaseInput placeholder={"Password"} />
        <BaseInput placeholder={"Confirm Password"} />
        <View style={styles.FlexRow}>
          <BasePicker
            items={fakePickerData.items}
            icon
            placeholder="Male"
            otherStyles={styles.picker}
          />
          <BaseCheckBox
            disabled={false}
            value={isAgeOver18}
            otherStyles={styles.checkbox}
            onValueChange={() => setIsAgeOver18((prev) => !prev)}
          >
            <Text>Age Over 18</Text>
          </BaseCheckBox>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "100%",
          }}
        >
          <BaseCheckBox
            disabled={false}
            value={isAgree}
            onValueChange={() => setIsAgree((prev) => !prev)}
          >
            <Text>
              I agree to your <Text style={styles.text}>Privacy Policy </Text>
              and
              <Text style={styles.text}> Terms & Condition</Text>
            </Text>
          </BaseCheckBox>
        </View>
        <BaseButton
          title="Sign up"
          otherStyles={{
            marginTop: 30,
          }}
        />
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 15,
  },

  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "48%",
  },
  picker: {
    flex: 1,
    marginRight: 5,
  },
  checkbox: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  FlexRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: COLORS.primary,
  },
});
