import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "13%",
    backgroundColor: "#FFFFFF",
  },
  companyTitle: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",

    marginTop: -9,
  },
  inputTitleText: {
    fontSize: 14,
  },

  eachRowAccount: {
    flexDirection: "row",

    textAlign: "left",
    marginLeft: 13,
    marginBottom: 3,
  },
  passwordContainer: {
    flexDirection: "row",

    textAlign: "left",
    paddingLeft: 8,
    height: 50,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#D0C21D",

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },

  loginContainer: {
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    paddingTop: 20,
  },
  centerLogo: {
    width: wp("100%"),
    height: hp("22%"),
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    width: "auto",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",
    borderColor: "#202945",
    borderWidth: 1,
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
    paddingTop: 5,
  },
  input: {
    textAlign: "left",
    paddingLeft: 8,
    height: 50,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#202945",
    margin: 10,
  },
  showHideIcon: {
    marginTop: 7,
    marginRight: 10,
    color: "#D0C21D",
  },
});
export { styles };
