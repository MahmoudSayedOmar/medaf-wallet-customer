import React from "react";
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%"
  },

  datePickerViewLeft: {
    width: "50%",
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    marginRight: 2
  },
  datePickerViewRight: {
    width: "50%",
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    marginLeft: 2
  },
  filter: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,

    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  paddingText: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});

export { styles };
