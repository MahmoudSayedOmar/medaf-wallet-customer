import React, { Component } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Button } from "native-base";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Toast from "react-native-tiny-toast";

import { Table, Row, Rows } from "react-native-table-component";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../state/state";
import { transfer } from "../state/transfer/action-creator";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
var logo = require("../../assets/download.jpg");

class TransferContainer extends Component {
  constructor() {
    super();
    this.state = {
      radioValue: "mob",
      receiverCodeNo: "",
      amount: "",
      senderCodeNo: "",
      pin: "",
    };
  }

  onChooseInput(value) {
    this.setState({ radioValue: value });
  }
  static mapStateToProps(state: State) {
    return {
      isTransfer: state.transfer.isTransfer,
      transferStatus: state.transfer.transferStatus,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ transfer }, dispatch);
  }

  clearState() {
    this.setState({
      receiverCodeNo: "",
      senderCodeNo: "",
      amount: "",
      pin: "",
    });
  }

  onTextChanged(e) {
    const re = new RegExp(/^\d*\.?\d*$/);
    debugger;
    if (re.test(e)) {
      this.setState({ amount: e });
    }
  }

  async makeTransfer() {
    var res = await this.props.transfer(this.state);
    if (res) {
      this.clearState();
    }
  }
  // componentWillReceiveProps(nextProps, prevState) {
  //   debugger;
  //   if (nextProps == prevState) {
  //     Toast.show(prevState.transferStatus, {
  //       position: Toast.position.center
  //     });
  //   } else {
  //     if (nextProps.isTransfer) {
  //       Toast.show(nextProps.transferStatus, {
  //         position: Toast.position.center
  //       });
  //     }
  //   }
  // }

  render() {
    const isEnabled =
      this.state.receiverCodeNo.length > 0 && this.state.pin.length > 0;

    return (
      <View style={styles.container}>
        <View style={styles.centerTitle}>
          <Text style={{ fontWeight: "bold", color: "#D0C21D", fontSize: 16 }}>
            Transfer
          </Text>
        </View>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>From Account</Text>
          <Text style={{ width: "50%" }}>#89778</Text>
        </View>
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>Balance</Text>
          <Text style={{ width: "50%" }}>50EGP</Text>
        </View>
        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>To Account</Text>
          <TextInput
            value={this.state.receiverCodeNo}
            onChangeText={(receiverCodeNo) => this.setState({ receiverCodeNo })}
            placeholder={"To Account"}
            placeholderTextColor="#202945"
            keyboardType={"numeric"}
            style={styles.input}
          />
        </View>
        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>Amount</Text>
          <TextInput
            value={this.state.amount}
            onChangeText={(e) => this.onTextChanged(e)}
            placeholder={"Enter Amount"}
            placeholderTextColor="#202945"
            keyboardType={"numeric"}
            style={styles.input}
          />
        </View>
        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>Pin</Text>
          <TextInput
            value={this.state.pin}
            onChangeText={(pin) => this.setState({ pin })}
            placeholder={"Enter Pin"}
            placeholderTextColor="#202945"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <Button
          disabled={!isEnabled}
          style={styles.buttonStyle}
          onPress={this.makeTransfer.bind(this)}
        >
          <Text style={{ color: "#202945" }}>Confirm</Text>
        </Button>
      </View>
    );
  }
}
export const TransferScreen = connect(
  TransferContainer.mapStateToProps,
  TransferContainer.mapDispatchToProps
)(TransferContainer);

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
    marginBottom: 12,
  },
  inputTitle: { width: "25%" },
  inputTitleText: { width: "30%" },
  eachRow: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  eachRowAccount: {
    marginTop: 8,
    marginBottom: 8,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    textAlign: "left",
    height: 35,
    width: "50%",

    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#202945",
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },

  centerContent: {
    justifyContent: "center",
    marginLeft: "5%",
    marginTop: "5%",
    height: 30,
  },
  buttonStyle: {
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
    padding: 10,
    paddingTop: 5,
  },
  head: { height: 30, backgroundColor: "#D0C21D" },
  headertext: { marginLeft: 6, marginRight: 6, color: "#ffffff" },
  bodytext: { marginLeft: 6, marginRight: 6, color: "#202945" },
});
