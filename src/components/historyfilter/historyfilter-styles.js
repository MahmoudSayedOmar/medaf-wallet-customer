import React from "react";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  selectField: {
    width: "100%",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    marginRight: 2
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

  datePicker: {
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5
  },
  buttonStyle: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 2,

    height: 35,
    marginTop: 10,

    alignSelf: "center"
  },
  paddingText: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});

export { styles };
