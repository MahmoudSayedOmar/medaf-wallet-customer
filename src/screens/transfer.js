import React, { Component } from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
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
  ScrollView
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
var logo = require("../../assets/download.jpg");

export class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      radioValue: "mob",
      transferToMemberId: "",
      transferAmount: "",
      membershipMobileNo: "",
      memberPin: ""
    };
  }
  onChooseInput(value) {
    this.setState({ radioValue: value });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>

        <View style={styles.eachRow}>
          <Text style={styles.inputTitleText}>From</Text>
          <Text style={{ width: "50%" }}>#89778 (50EGP)</Text>
        </View>

        <View style={styles.eachRow}>
          <Text style={styles.inputTitleText}>Search By</Text>
          <View style={{ width: "50%", marginTop: "3%" }}>
            <RadioForm
              formHorizontal={true}
              radio_props={[
                { label: "Mob", value: "mob" },
                { label: "Id", value: "id" }
              ]}
              initial={0}
              buttonColor={"#D0C21D"}
              selectedButtonColor={"#D0C21D"}
              radioStyle={{ paddingRight: 25 }}
              onPress={value => {
                this.onChooseInput(value);
              }}
            />
          </View>
        </View>
        {this.state.radioValue === "mob" ? (
          <View style={styles.eachRow}>
            <Text style={styles.inputTitle}>Member Mobile</Text>
            <TextInput
              value={this.state.membershipMobileNo}
              onChangeText={membershipMobileNo =>
                this.setState({ membershipMobileNo })
              }
              placeholder={"Member Mob. number"}
              placeholderTextColor="#D0C21D"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        ) : (
          <View style={styles.eachRow}>
            <Text style={styles.inputTitle}>Member Id</Text>
            <TextInput
              value={this.state.transferToMemberId}
              onChangeText={transferToMemberId =>
                this.setState({ transferToMemberId })
              }
              placeholder={"Enter Member Id"}
              placeholderTextColor="#D0C21D"
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        )}

        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>Amount</Text>
          <TextInput
            value={this.state.transferAmount}
            onChangeText={transferAmount => this.setState({ transferAmount })}
            placeholder={"Enter Amount"}
            placeholderTextColor="#D0C21D"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <Button
          style={styles.buttonStyle}
          onPress={() => {
            // this.setState({
            //   balanceWebsocketService: new BalanceWebsocketService()
            // });
          }}
        >
          <Text style={{ color: "#202945" }}>Check Member</Text>
        </Button>
        <View style={styles.eachRow}>
          <Text style={styles.inputTitle}>Pin</Text>
          <TextInput
            value={this.state.memberPin}
            onChangeText={memberPin => this.setState({ memberPin })}
            placeholder={"Enter Pin"}
            placeholderTextColor="#D0C21D"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <Button
          style={styles.buttonStyle}
          onPress={() => {
            // this.setState({
            //   balanceWebsocketService: new BalanceWebsocketService()
            // });
          }}
        >
          <Text style={{ color: "#202945" }}>Confirm</Text>
        </Button>
      </View>
    );
  }
}
export default Transfer;

const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  inputTitle: { width: "20%" },
  inputTitleText: { width: "25%" },
  eachRow: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    textAlign: "left",
    height: 35,
    width: "50%",

    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5,
    color: "#D0C21D",
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  },
  centerContent: {
    justifyContent: "center",
    marginLeft: "5%",
    marginTop: "5%",
    height: 30
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
    paddingTop: 5
  },
  head: { height: 30, backgroundColor: "#D0C21D" },
  headertext: { marginLeft: 6, marginRight: 6, color: "#ffffff" },
  bodytext: { marginLeft: 6, marginRight: 6, color: "#202945" }
});
