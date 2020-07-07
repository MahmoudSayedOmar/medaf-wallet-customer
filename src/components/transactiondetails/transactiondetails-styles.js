import React from "react";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: "2%",
    backgroundColor: "#FFFFFF",
  },
  centerTitle: {
    borderColor: "#D0C21D",

    borderBottomWidth: 1,
    paddingRight: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 7,
    paddingBottom: 12,
    paddingTop: 25,
  },
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  storeTitle: {
    fontWeight: "bold",
    color: "#D0C21D",
    fontSize: 18,
    marginBottom: 20,
  },
  transactionDate: {
    color: "#D0C21D",
    fontSize: 16,
    marginBottom: 20,
  },
  restOfDetails: {
    flexDirection: "row",
    borderBottomColor: "#D0C21D",
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingLeft: 15,
    marginVertical: 6,
  },
  detailsTitle: {
    color: "#202945",
  },
  detailsData: {
    color: "#000",
  },
});
