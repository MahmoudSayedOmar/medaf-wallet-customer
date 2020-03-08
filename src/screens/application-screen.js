import React, { Component } from "react";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  StyleSheet
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { tryRefresh } from "../state";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button
} from "native-base";
import { connect } from "react-redux";
import Barcode from "react-native-barcode-builder";
import { Dispatch, bindActionCreators } from "redux";

export class ApplicationContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static mapStatetToProps(state: State) {
    return {
      balance: state.userInfo.balance,
      membershipId: state.authorization.membershipId
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
        <Card>
          <CardItem
            header
            style={{
              backgroundColor: "#D0C21D",
              flexDirection: "row"
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
                flexDirection: "row",
                flex: 1,
                justifyContent: "center"
              }}
            >
              <Barcode
                style={{ alignSelf: "center" }}
                value={this.props.membershipId}
                format="CODE128"
              />
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
        <Button
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: wp("35%"),
            height: hp("5"),
            backgroundColor: "#D0C21D",
            shadowColor: "#000000",
            color: "#202945",

            borderColor: "#202945",
            borderWidth: 2,
            paddingBottom: 5,
            height: 40,
            marginTop: 30,
            alignSelf: "center"
          }}
          onPress={this.onRefresh.bind(this)}
        >
          <Text style={{ color: "#202945" }}>Refresh</Text>
        </Button>
      </View>
    );
  }
}
export const ApplicationScreen = connect(
  ApplicationContainer.mapStatetToProps,
  ApplicationContainer.mapDispatchToProps
)(ApplicationContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
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
    width: wp("35%"),
    height: hp("5"),
    backgroundColor: "#60b4c2",
    shadowColor: "#3cc2cf",
    marginLeft: 5,
    alignSelf: "center"
  }
});
