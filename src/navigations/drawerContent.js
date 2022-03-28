import React, { useContext } from "react";
import { View, Text, Pressable, Image, Platform } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { ifIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import icons from "../constants/icons";
import navigation from "./rootNavigator";
import images from "../dummyData/images";
import helper from "../constants/helper";
import { COLORS, FONTS } from "../constants/theme";
import { BaseIcon } from "../components";
import AuthContext from "../context/AuthContext";

export const DrawerContent = (props) => {
  const { trigger, activeRoute, user } = useContext(AuthContext);

  const renderAccountinfo = () => {
    return (
      <View
        style={{
          height: 130,

          ...ifIphoneX(
            {
              marginTop: -55,
            },
            {
              marginTop: -5,
            }
          ),
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            marginTop: 15,
            padding: 15,
            flexDirection: "row",
            position: "absolute",
            alignItems: "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: COLORS.drawer_bg,
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              backgroundColor: COLORS.gray,
              borderRadius: 40,
              overflow: "hidden",
              marginRight: 10,
            }}
          >
            <Image source={images.profile} style={{ height: 80, width: 80 }} />
          </View>

          <View style={{ marginTop: 10, flex: 1 }}>
            <Text style={{ color: COLORS.black, ...FONTS.h2 }}>Hey</Text>
            <Text
              style={{
                color: COLORS.black,
                ...FONTS.body5,
                lineHeight: 18,
                fontSize: 15,
              }}
            >
              fazal karim
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderMenuItem = (props) => {
    return helper.drawer_menu.map((menu) => (
      <Pressable
        android_ripple={{ color: COLORS.primary }}
        onPress={() => {
          if (menu.route === "logout") {
            return trigger.signout();
          }
          trigger.setRoute(menu.route);
          navigation.navigate(menu.route);
        }}
        key={menu.title}
        style={({ pressed }) => [
          {
            opacity: pressed ? (Platform.OS === "ios" ? 0.7 : 1) : 1,
          },
          {
            padding: 10,
            borderRadius: 4,
            overflow: "hidden",
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: COLORS.lightGray,
            borderBottomWidth: 1,
            marginTop: 5,
          },
        ]}
      >
        <BaseIcon
          icon={icons[menu.icon]}
          color={
            activeRoute === menu.route
              ? COLORS.primary_second
              : "rgba(0,0,0,0.6)"
          }
        />

        <Text
          style={{
            flex: 1,
            marginLeft: 15,
            ...FONTS.h3,
            color:
              activeRoute === menu.route
                ? COLORS.primary_second
                : "rgba(0,0,0,0.9)",
          }}
        >
          {menu.title}
        </Text>
      </Pressable>
    ));
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DrawerContentScrollView {...props}>
        {renderAccountinfo()}
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 15,
          }}
        >
          {renderMenuItem(props)}
        </View>
      </DrawerContentScrollView>
      <View style={{ marginHorizontal: 20, marginBottom: 5 }}>
        <Text
          style={{
            textAlign: "right",
            ...FONTS.h4,
            color: "rgba(0,0,0,0.3)",
            fontSize: 10,
          }}
        >
          v<Text>1.0.0</Text>
        </Text>
      </View>
    </View>
  );
};
