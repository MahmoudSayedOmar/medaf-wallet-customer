import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { tryRefresh } from "../state";
import { Card, CardItem, Body, Text, Button, Spinner } from "native-base";
import { connect } from "react-redux";
import Barcode from "react-native-barcode-builder";
import { Dispatch, bindActionCreators } from "redux";
import { BalanceWebsocketService } from "../services/balance-websocket.service";

import QRCode from "react-native-qrcode-svg";
var logo = require("../../assets/download.jpg");
export class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      balanceWebsocketService: new BalanceWebsocketService()
    };
  }

  static mapStatetToProps(state: State) {
    return {
      balance: state.userInfo.balance,
      membershipId: state.authorization.membershipId,
      connectionId: state.userInfo.connectionId,
      connected: state.userInfo.connected
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryRefresh }, dispatch);
  }
  onRefresh() {
    this.props.tryRefresh();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerTitle}>
          <Text style={{ fontWeight: "bold", color: "#D0C21D" }}>Home</Text>
        </View>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <Card>
          <CardItem
            header
            style={{
              backgroundColor: "#D0C21D",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#202945"
              }}
            >
              {this.props.balance}
            </Text>
            <Text style={{ fontSize: 25, color: "#202945" }}> EGP</Text>
          </CardItem>
          <CardItem>
            <Body
              style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {this.props.connected === -1 ? (
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.setState({
                      balanceWebsocketService: new BalanceWebsocketService()
                    });
                  }}
                >
                  <Text style={{ color: "#202945" }}>Reload</Text>
                </Button>
              ) : this.props.connected === 1 ? (
                <QRCode
                  value={
                    this.props.connectionId + "@" + this.props.membershipId
                  }
                  size={200}
                />
              ) : (
                <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
              )}
            </Body>
          </CardItem>
          <CardItem footer>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 20, color: "#202945" }}>
                {this.props.membershipId}
              </Text>
            </View>
          </CardItem>
        </Card>
        <Button style={styles.button} onPress={this.onRefresh.bind(this)}>
          <Text style={{ color: "#202945" }}>Refresh</Text>
        </Button>
      </View>
    );
  }
}
export const HomeScreen = connect(
  HomeContainer.mapStatetToProps,
  HomeContainer.mapDispatchToProps
)(HomeContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "2%",
    backgroundColor: "#FFFFFF"
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
    paddingTop: 25
  },
  centerLogo: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    margin: 10
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
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

    height: 31,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",

    paddingTop: 4
  }
});
