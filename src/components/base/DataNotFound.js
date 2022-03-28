import React from "react";
import { Text } from "react-native";

export const DataNotFound = ({ title = "No Data Found..." }) => (
  <Text style={{ textAlign: "center", marginTop: 20 }}>{title}</Text>
);
