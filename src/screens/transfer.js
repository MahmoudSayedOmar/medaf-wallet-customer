import React, { Component } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import { Button } from "native-base";
import {
  ImageBackground,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Toast from "react-native-tiny-toast";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../state/state";
import { transfer } from "../state/transfer/action-creator";


import {
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
var logo = require("../../assets/download.jpg");

class TransferContainer extends Component {
  constructor() {
    super();
    this.state = {
      type: "mob",
      mobile: "",
      receiverCodeNo: "",
      amount: "",
      senderCodeNo: "",
      pin: "",
    };
  }

  onChooseInput(value) {
    debugger;
    this.setState({ type: value });
  }
  static mapStateToProps(state: State) {
    return {
      isTransfer: state.transfer.isTransfer,
      transferStatus: state.transfer.transferStatus,
      balance: state.userInfo.balance,
      membershipId: state.authorization.CardNo,
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ transfer }, dispatch);
  }

  clearState() {
    this.setState({
      type: "",
      mobile: "",
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
  onHandleConfirmation() {
    if (
    (this.state.receiverCodeNo.length <= 0 && this.state.mobile.length<=0) ||
      this.state.pin.length <= 0 ||
      this.state.amount.length <= 0
    ) {
      let alertMessage;
      if (this.state.receiverCodeNo.length <= 0 && this.state.mobile.length<=0) {
        alertMessage = "You need to insert the reciever ";
      } else if (this.state.amount.length <= 0) {
        alertMessage = "You need insert the amount";
      } else if (this.state.pin.length <= 0) {
        alertMessage = "You need to insert Your Pin Number";
      }
      Alert.alert("Error", alertMessage, [
        {
          text: "ok",
          style: "cancel",
        },
      ]);
    } else {
      Alert.alert("confirm", "do you really want to transfer this amount", [
        { text: "YES", onPress: this.makeTransfer.bind(this) },
        {
          text: "NO",

          style: "cancel",
        },
      ]);
    }
  }
  async makeTransfer() {
    debugger;
    var res = await this.props.transfer(this.state);
    debugger;
    if (res) {
      // const toast = Toast.show(result["Message"], {
      //   position: Toast.position.center,
      // });
      // setTimeout(function () {
      //   Toast.hide(toast);
      //   },9000);
      // 
      if (Platform.OS === 'android') {
        debugger;
        ToastAndroid.show(result["Message"], ToastAndroid.SHORT);
        this.clearState();
      } else {
        AlertIOS.alert(result["Message"]);
        this.clearState();
      }
    }
   
  }

  render() {
    const isEnabled =
      this.state.receiverCodeNo.length > 0 && this.state.pin.length > 0;

    return (
      // trasnfer Component
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
          <Text style={{ width: "50%" }}> #{this.props.membershipId}</Text>
        </View>
        <View style={styles.eachRowAccount}>
          <Text style={styles.inputTitleText}>Balance</Text>
          <Text style={{ width: "50%" }}> {this.props.balance} EGP</Text>
        </View>

        <View style={styles.eachRow}>
          <Text style={styles.inputTitleText}>Search By</Text>
          <View style={{ width: "53%", marginTop: "3%",marginLeft:"-3%" }}>
            <RadioForm
              formHorizontal={true}
              radio_props={[
                { label: "Mob", value: "mob" },
                { label: "Id", value: "id" },
              ]}
              initial={0}
              
              buttonColor={"#D0C21D"}
              selectedButtonColor={"#D0C21D"}
              radioStyle={{ paddingRight: 25 }}
              onPress={(value) => {
                this.onChooseInput(value);
              }}
            />
          </View>
        </View>

        {this.state.type === "mob" ? (
          <View style={styles.eachRow}>
            <Text style={styles.inputTitle}>Mobile</Text>
            <TextInput
              value={this.state.mobile}
              onChangeText={(mobile) => this.setState({ mobile })}
              placeholder={"Member Mob. number"}
              placeholderTextColor="#202945"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        ) : (
          <View style={styles.eachRow}>
            <Text style={styles.inputTitle}>To Account</Text>
            <TextInput
              value={this.state.receiverCodeNo}
              onChangeText={(receiverCodeNo) =>
                this.setState({ receiverCodeNo })
              }
              placeholder={"To Account"}
              placeholderTextColor="#202945"
              keyboardType={"numeric"}
              style={styles.input}
            />
          </View>
        )}

        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>Amount</Text>
          <TextInput
            value={this.state.amount}
            onChangeText={(e) => this.onTextChanged(e)}
            placeholder={"Enter the Amount"}
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
            placeholder={"Enter your Pin"}
            placeholderTextColor="#202945"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <Button
          // disabled={!isEnabled}
          style={styles.buttonStyle}
          // onPress={this.makeTransfer.bind(this)}
          onPress={() => this.onHandleConfirmation()}
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
