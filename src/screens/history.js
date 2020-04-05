import React, { Component } from "react";
import {
  ImageBackground,
  Alert,
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  StyleSheet
} from "react-native";
import EachListingComponent from "./eachLisitngComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  Button,
  Icon,
  DatePicker,
  Picker,
  Header,
  Right,
  Body,
  Left,
  Title
} from "native-base";
var logo = require("../../assets/download.jpg");
const Item = Picker.Item;
export class History extends Component {
  constructor() {
    super();
    this.state = {
      dateFrom: "",
      dateTo: "",
      selected: "undefined",
      filterShowHide: "hide",
      results: {
        items: []
      },
      data: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ddad53abb28ba",
          type: "cashIn",
          title: "Cash In",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E",
          empolyeeName: "smash main center"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad5ee3abb28ba",
          type: "cashOut",
          title: "Cash Out",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E",
          empolyeeName: "smash main center"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad5gg3abb28ba",
          type: "payment",
          title: "Payment",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E",
          billType: "bill Type"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53adabb28ba",
          type: "transfer",
          title: "Transfer",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E",
          transferTo: "ahmed mohamed #9997"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abgeb28ba",
          title: "Cash In",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abba28ba",
          title: "Cash In",
          transactionAmount: "500 L.E",
          dataDate: "25 Jan, 2020",
          remainingAmount: "500 L.E"
        }
      ]
    };
  }
  setDate(newDate) {
    this.setState({ dateFrom: newDate });
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onShowHideFilters() {
    if (this.state.filterShowHide === "hide") {
      this.setState({ filterShowHide: "show" });
    } else {
      this.setState({ filterShowHide: "hide" });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <View style={styles.filter}>
          <Text onPress={() => this.onShowHideFilters()}>Filter</Text>
          <View
            style={{
              display: this.state.filterShowHide === "hide" ? "none" : "block",
              marginTop: 10
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={styles.datePickerViewLeft}>
                <DatePicker
                  style={styles.datePicker}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="from Date"
                  textStyle={{ color: "#D0C21D" }}
                  placeHolderTextStyle={{
                    fontSize: 15,
                    color: "#D0C21D"
                  }}
                  onDateChange={dateFrom => this.setState({ dateFrom })}
                  disabled={false}
                />
              </View>
              <View style={styles.datePickerViewRight}>
                <DatePicker
                  style={styles.datePicker}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="To Date"
                  textStyle={{ color: "#D0C21D" }}
                  placeHolderTextStyle={{
                    fontSize: 15,
                    color: "#D0C21D"
                  }}
                  onDateChange={dateTo => this.setState({ dateTo })}
                  disabled={false}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.selectField}>
                <Picker
                  renderHeader={backAction => (
                    <Header style={{ backgroundColor: "#D0C21D" }}>
                      <Left>
                        <Button transparent onPress={backAction}>
                          <Icon
                            name="arrow-back"
                            style={{ color: "#FFFFFF" }}
                          />
                        </Button>
                      </Left>
                      <Body style={{ flex: 3 }}>
                        <Title style={{ color: "#FFFFFF" }}>
                          Transaction Type
                        </Title>
                      </Body>
                      <Right />
                    </Header>
                  )}
                  mode="dropdown"
                  iosHeader="Transaction"
                  placeholder="Transaction Type"
                  placeholderStyle={{ color: "#D0C21D" }}
                  iosIcon={
                    <Icon name="arrow-down" style={{ color: "#D0C21D" }} />
                  }
                  textStyle={{ color: "#D0C21D" }}
                  itemStyle={{
                    backgroundColor: "#ffffff",
                    marginLeft: 0,
                    paddingLeft: 10,
                    color: "#D0C21D"
                  }}
                  itemTextStyle={{ color: "#D0C21D" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Cash In" value="key0" />
                  <Picker.Item label="Cash Out" value="key1" />
                  <Picker.Item label="Transfer" value="key2" />
                </Picker>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button style={styles.buttonStyle} onPress={() => {}}>
                <Text style={{ color: "#202945" }}>Filter</Text>
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.filter}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                borderColor: "#D0C21D",
                borderRightWidth: 1,
                paddingRight: 10
              }}
            >
              <Text style={styles.paddingTextLeft}>
                Initial Value:<Text> 3000</Text>
              </Text>
            </View>
            <View>
              <Text style={styles.paddingText}>
                Current Value:<Text> 5000</Text>
              </Text>
            </View>
          </View>
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return <EachListingComponent item={item} />;
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default History;

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
  }
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

  item: {
    backgroundColor: "#D0C21D",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    width: "80%"
  },
  listBody: {
    fontSize: 15
  },
  listBalance: {
    textAlign: "right",
    color: "#202945"
  },
  arrow: {
    width: "10%",
    fontSize: 30,
    paddingTop: 15,
    textAlign: "right",
    color: "#202945"
  },
  datePicker: {
    borderWidth: 2,
    borderColor: "#D0C21D",
    borderRadius: 5
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

    alignSelf: "center",
    padding: 10,
    paddingTop: 5
  },
  paddingText: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  paddingTextLeft: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
