import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { tryRefresh } from "../state";
import { Card, CardItem, Body, Text, Button, Spinner } from "native-base";
import { connect } from "react-redux";
import Barcode from "react-native-barcode-builder";
import { Dispatch, bindActionCreators } from "redux";
import { BalanceWebsocketService } from "../services/balance-websocket.service";

import QRCode from "react-native-qrcode-svg";
var logo = require("../../assets/download.jpg");
export class transactionDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      balanceWebsocketService: new BalanceWebsocketService(),
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      debugger;
      this.onRefresh();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  static mapStatetToProps(state: State) {
    return {
      balance: state.userInfo.balance,
      membershipId: state.authorization.CardNo,
      connectionId: state.userInfo.connectionId,
      connected: state.userInfo.connected,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryRefresh }, dispatch);
  }
  onRefresh() {
    this.props.tryRefresh();
  }
  render() {
    let transactionId = this.props.route.params.transactionId;
    console.log(transactionId, "transaction Id");
    // this suppose to be the transaction id to get the rest of details
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Text style={styles.storeTitle}>Store Name</Text>
          <Image source={logo} style={{ width: 150 }} />
          <Text style={styles.transactionDate}>Mon 25 Feb, 2020</Text>
        </View>
        <View style={styles.restOfDetails}>
          <Text style={styles.detailsTitle}>UserName : </Text>
          <Text style={styles.detailsData}>mohsen abdel raoof</Text>
        </View>
        <View style={styles.restOfDetails}>
          <Text style={styles.detailsTitle}>Ref. Number : </Text>
          <Text style={styles.detailsData}>#47988234</Text>
        </View>
        <View style={styles.restOfDetails}>
          <Text style={styles.detailsTitle}>Total Amount : </Text>
          <Text style={styles.detailsData}>5894 EGP</Text>
        </View>
        <View style={styles.restOfDetails}>
          <Text style={styles.detailsTitle}>Printed On : </Text>
          <Text style={styles.detailsData}>Mon 25 Feb, 2020</Text>
        </View>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
      </View>
    );
  }
}
export const TransactionDetailsScreen = connect(
  transactionDetailsContainer.mapStatetToProps,
  transactionDetailsContainer.mapDispatchToProps
)(transactionDetailsContainer);

const styles = StyleSheet.create({
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
