import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import icons from "../../constants/icons";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import dummyImages from "../../dummyData/images";
import { BaseIcon } from "./BaseIcon";

export const BaseHeader = ({
  title,
  isMenu,
  onPressRight,
  rightIcon,
  iconTitle,
  subtitle,
  isBack = true,
  showCart = false,
  onPressBack,
  image,
  height = 80,
  iconSize = 25,
  iconColor = COLORS.black,
  shadow = false,
  loading = false,
  isProfile = false,
  otherStyles,
  titleStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          height: 70,
          alignItems: "center",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 30,
          flexDirection: "row",
          paddingHorizontal: SIZES.base,
        },
        otherStyles,
        shadow ? styles.shadow : null,
      ]}
    >
      <View style={{ marginLeft: 5, marginRight: image ? 5 : 10 }}>
        {!isMenu ? (
          <>
            {isBack ? (
              <TouchableOpacity
                style={styles.btnStyle}
                activeOpacity={0.7}
                onPress={() => {
                  onPressBack ? onPressBack() : navigation.goBack();
                }}
              >
                <BaseIcon
                  icon={icons.right_arrow}
                  size={18}
                  color={COLORS.black}
                />
              </TouchableOpacity>
            ) : null}
          </>
        ) : (
          <TouchableOpacity
            style={styles.btnStyle}
            activeOpacity={0.7}
            onPress={() => navigation.toggleDrawer()}
          >
            <BaseIcon icon={icons.menu} color={COLORS.black} />
          </TouchableOpacity>
        )}
      </View>
      {image && (
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            marginRight: 10,
          }}
        >
          <Image
            source={image}
            style={{ height: 40, width: 40, borderRadius: 20 }}
          />
        </View>
      )}
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          style={[
            {
              ...FONTS.h3,
              color: COLORS.black,
              fontWeight: "600",
              marginLeft: 10,
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            numberOfLines={1}
            style={{
              ...FONTS.body4,
              fontSize: 10,
              lineHeight: 14,
              color: COLORS.white,
              marginLeft: 2,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>
      <View
        style={{
          marginLeft: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {showCart && (
          <>
            {loading ? (
              <ActivityIndicator
                size={"small"}
                animating={loading}
                color="white"
                style={{ marginRight: 15 }}
              />
            ) : (
              <TouchableOpacity
                style={styles.btnStyle}
                activeOpacity={1}
                onPress={() => navigation.navigate("cart")}
              >
                <BaseIcon
                  icon={icons?.basket}
                  color={iconColor}
                  size={iconSize + 3}
                />
                <View style={styles.cartBtn}>
                  <Text style={styles.cartCount}>{0}</Text>
                </View>
              </TouchableOpacity>
            )}
          </>
        )}
        {isProfile && (
          <TouchableOpacity
            style={[
              styles.btnStyle,
              {
                paddingHorizontal: iconTitle ? 0 : 15,
                backgroundColor: COLORS.gray,
                overflow: "hidden",
              },
            ]}
            activeOpacity={1}
            onPress={onPressRight}
          >
            <Image
              source={dummyImages.profile}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </TouchableOpacity>
        )}
        {onPressRight && (
          <>
            {loading ? (
              <ActivityIndicator
                size={"small"}
                animating={loading}
                color="white"
                style={{ marginRight: 15 }}
              />
            ) : (
              <TouchableOpacity
                style={[
                  styles.btnStyle,
                  {
                    paddingHorizontal: iconTitle ? 0 : 15,
                  },
                ]}
                activeOpacity={1}
                onPress={onPressRight}
              >
                <BaseIcon icon={rightIcon} color={iconColor} size={iconSize} />
              </TouchableOpacity>
            )}
          </>
        )}
        {iconTitle && (
          <TouchableOpacity activeOpacity={1} onPress={onPressRight}>
            <Text
              style={{
                ...FONTS.body4,
                fontWeight: "600",
                fontSize: 13,
                color: iconColor,
                marginLeft: 5,
                marginRight: 10,
              }}
            >
              {iconTitle}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cartBtn: {
    position: "absolute",
    top: 2,
    left: 5,
    backgroundColor: "rgba(3, 89, 49 , 0.9)",
    width: 21,
    height: 21,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  cartCount: {
    ...FONTS.body4,
    fontSize: 10,
    lineHeight: 14,
    textAlign: "center",
    color: COLORS.white,
  },
});
