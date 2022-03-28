import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { LinearGradient } from "expo-linear-gradient";
import { BaseIcon } from "../../../components";
import icons from "../../../constants/icons";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";

export const TabContent = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // custom icons for tab
        const icon =
          options.title === "home"
            ? "home"
            : options.title === "notification"
            ? "bell"
            : options.title === "profile"
            ? "user"
            : "settings";

        // get foucs event
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            android_ripple={{ color: COLORS.lightGray, radius: 50 }}
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: getBottomSpace(),
            }}
          >
            {label === "booknow" ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
                style={{
                  width: SIZES.tabSize * 1.5,
                  height: SIZES.tabSize * 1.5,
                  position: "absolute",
                  bottom: 5,
                  borderRadius: SIZES.tabSize,
                  borderWidth: 5,
                  borderColor: COLORS.lightGray,
                }}
              >
                <LinearGradient
                  start={{ x: 0.0, y: 0.0 }}
                  colors={[
                    COLORS.primary_third,
                    COLORS.primary_second,
                    COLORS.primary,
                  ]}
                  style={{
                    flex: 1,
                    borderRadius: SIZES.tabSize,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.h3,
                      fontSize: 13,
                      color: COLORS.white,
                    }}
                  >
                    Book Now
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <BaseIcon
                icon={icons[icon]}
                color={isFocused ? COLORS.primary : COLORS.gray}
                size={isFocused ? 18 : 16}
              />
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    zIndex: 999,
    height: SIZES.tabSize,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
