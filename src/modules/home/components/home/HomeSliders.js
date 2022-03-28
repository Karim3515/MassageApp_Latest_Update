import React, { useRef, useState, useEffect } from "react";
import { View, Platform, StyleSheet } from "react-native";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import { COLORS, SIZES } from "../../../../constants/theme";
import images from "../../../../dummyData/images";

const screenWidth = SIZES.width;
const itemWidth = screenWidth - 25;
const itemHeight = 120;

const ENTRIES1 = [
  {
    illustration: images.slide0,
  },
  {
    illustration: images.slide1,
  },
  {
    illustration: images.slide2,
  },
  {
    illustration: images.slide3,
  },
];

export const HomeSlider = () => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <ParallaxImage
        source={item.illustration}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0}
        {...parallaxProps}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth - 20}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setActiveSlide(index)}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
      <Pagination
        dotsLength={entries.length}
        carouselRef={carouselRef}
        activeDotIndex={activeSlide}
        containerStyle={{
          marginTop: -25,
          zIndex: -20,
        }}
        dotContainerStyle={{
          marginRight: -5,
        }}
        tappableDots
        dotStyle={{
          width: 15,
          height: 7,
          borderRadius: 5,
          backgroundColor: COLORS.primary,
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  imageContainer: {
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: COLORS.white,
    width: itemWidth,
    height: itemHeight,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginBottom: 3,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
