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

var logo = require("../../assets/download.jpg");
export class History extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Cash In",
          dataBody: "500 L.E",
          dataDate: "25 Jan, 2020",
          currentBalance: "500 L.E"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
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
                      <Text style={styles.listBody}>{item.dataBody}</Text>
                      <Text style={styles.listBody}>{item.dataDate}</Text>
                    </View>
                  </View>

                  <Text style={styles.listBalance}>{item.currentBalance}</Text>
                </View>
              );
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default History;

const styles = StyleSheet.create({
  centerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%"
  },
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  },
  tableMargin: {
    justifyContent: "center",
    alignItems: "center"
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
  }
});
