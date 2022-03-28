import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseHeader, BaseSearch, BaseView } from "../../../components";
import images from "../../../dummyData/images";
import { ProductsCard } from "../components";

export const ProductsScreen = () => {
  return (
    <BaseView>
      <BaseHeader isMenu title={"Products"} />
      <View style={styles.container}>
        <BaseSearch otherStyles={{ marginTop: 20 }} />
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <ProductsCard
            image={images.slide3}
            title={"Gun Massage"}
            price={"100.0"}
          />
          <ProductsCard image={images.slide3} />
          <ProductsCard image={images.slide3} />
        </View>
      </View>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
