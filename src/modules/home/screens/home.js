import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { BaseHeader, BaseSearch, BaseView } from "../../../components";
import icons from "../../../constants/icons";
import { COLORS, FONTS, SIZES } from "../../../constants/theme";
import images from "../../../dummyData/images";
import {
  CategoryCard,
  HomeSlider,
  HomeProductCard,
  SubCategoryCard,
} from "../components";

export const HomeScreen = () => {
  return (
    <BaseView>
      <BaseHeader isMenu isProfile />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.base,
          paddingBottom: SIZES.tabSize + 30,
        }}
      >
        {/* Search  */}
        <BaseSearch />
        {/* Slider  */}
        <HomeSlider />
        {/* Categories  */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 5,
            flexGrow: 1,
          }}
        >
          <CategoryCard icon={icons.massage} title="Massage" active />
          <CategoryCard icon={icons.face_care} title="Skin Care" />
          <CategoryCard icon={icons.styling} title="Styling" />
          <CategoryCard icon={icons.face_care} title="Styling" />
        </ScrollView>

        {/* SubCategores  */}
        <View style={styles.miniContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Massage</Text>
            <Text style={styles.subtitle}>See All</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
              flexGrow: 1,
            }}
          >
            <SubCategoryCard image={images.slide1} title="sweedish massage" />
            <SubCategoryCard image={images.slide2} title="hot stones" />
            <SubCategoryCard image={images.slide3} title="head massage" />
          </ScrollView>
        </View>

        {/* Products  */}

        <View style={styles.miniContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>Product</Text>
            <Text style={styles.subtitle}>See All</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
              flexGrow: 1,
            }}
          >
            <HomeProductCard
              title="massage gun"
              detail={"The percussion massage gun great for myofascial"}
              image={images.gun_massage}
              price="100.00"
            />
            <HomeProductCard
              title="olive oil"
              detail={"The percussion massage gun great for myofascial"}
              image={images.slide3}
              price="13.00"
            />
            <HomeProductCard
              title="face message tool"
              detail={"The percussion massage gun great for myofascial"}
              image={images.face_tool}
              price="40.00"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  miniContainer: {
    marginTop: 10,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    ...FONTS.h3,
  },
  subtitle: {
    ...FONTS.body3,
    color: COLORS.primary,
  },
});
