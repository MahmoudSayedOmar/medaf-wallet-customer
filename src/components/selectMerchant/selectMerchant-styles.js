import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%"
  },
  centerTitle: {
    borderColor: "#D0C21D",
    borderBottomWidth: 1,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 7,
    paddingBottom: 11,
    paddingTop: 22
  },
  selectField: {
    width: "100%",

    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    marginRight: 2
  },
  container: {
    padding: "3%"
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    height: hp("4"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",
    borderColor: "#202945",
    borderWidth: 1,
    marginTop: 15,
    alignSelf: "center",

    paddingTop: 4,
    paddingLeft: "2%",
    paddingRight: "2%"
  }
});

export { styles };
