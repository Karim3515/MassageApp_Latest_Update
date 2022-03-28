import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, FONTS } from "../../constants/theme";
import icons from "../../constants/icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { BaseIcon } from "./BaseIcon";
import { DataNotFound } from "./DataNotFound";

export const BasePicker = ({
  items = [],
  selected,
  placeholder = "select item",
  setSelected = () => {},
  onSelect = () => {},
  icon,
  otherStyles,
  item_name = "label",
  item_value = "value",
}) => {
  const pickerRef = React.useRef();

  function close() {
    pickerRef.current?.close();
  }

  function open() {
    pickerRef.current?.open();
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={open}
        style={[
          {
            width: "100%",
            height: 45,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            paddingHorizontal: 10,
            borderColor: COLORS.gray,
            borderWidth: 1,
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: COLORS.lightGray,
          },
          otherStyles,
        ]}
      >
        <Text
          numberOfLines={1}
          style={{ ...FONTS.body4, fontSize: 12, flex: 1, color: COLORS.black }}
        >
          {selected
            ? items.find((i) => i?.[item_value] === selected)?.[item_name]
            : placeholder}
        </Text>
        {icon && (
          <BaseIcon icon={icons.arrow_down} color={COLORS.gray} size={14} />
        )}
      </TouchableOpacity>
      <RBSheet
        ref={pickerRef}
        height={items.length > 4 ? 350 : 250}
        openDuration={250}
        customStyles={{
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}
      >
        <ScrollView
          style={{
            marginBottom: getBottomSpace(),
            marginTop: 20,
          }}
        >
          {!items.length && <DataNotFound title="No data..." />}
          {items.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setSelected(item?.[item_value]);
                onSelect(item?.[item_value]);
                close();
              }}
              key={`${index} - ${item?.[item_value]}`}
              activeOpacity={0.7}
              style={{
                marginHorizontal: 10,
                marginBottom: 5,
                padding: 15,
                borderBottomColor: COLORS.lightGray,
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.gray,
                  textAlign: "center",
                }}
              >
                {item?.[item_name]}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </RBSheet>
    </>
  );
};
