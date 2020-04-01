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
function EachListingComponent({ item }) {
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            width: "90%"
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.listBody}>{item.transactionAmount}</Text>
          <Text style={styles.listBody}>{item.dataDate}</Text>
          {(() => {
            if (item.type == "transfer") {
              return (
                <Text style={styles.listBody}>
                  Transfer To: {item.transferTo}
                </Text>
              );
            } else if (item.type == "payment") {
              return <Text>Bill Type: {item.billType}</Text>;
            } else if (item.type == "cashIn") {
              return <Text>Cash In By: {item.empolyeeName}</Text>;
            } else if (item.type == "cashOut") {
              return <Text>Cash Out By: {item.empolyeeName}</Text>;
            }
          })()}
        </View>
        {/* <Text style={styles.arrow}>></Text> */}
      </View>

      <Text style={styles.listBalance}>
        Remaining amount: {item.remainingAmount}
      </Text>
    </View>
  );
}
export default EachListingComponent;

const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2%"
  },
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
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
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
    width: "100%",
    height: hp("5"),
    backgroundColor: "#D0C21D",
    shadowColor: "#000000",
    color: "#202945",

    borderColor: "#202945",
    borderWidth: 2,

    height: 35,
    marginTop: 10,

    alignSelf: "center"
  },
  paddingText: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});
