import React, { Component } from "react";
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
import { Table, Row, Rows } from "react-native-table-component";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
var logo = require("../../assets/download.jpg");
export class History extends Component {
  constructor() {
    super();
    this.state = {
      tableHead: ["id", "Action", "Amount", "Date"],
      tableData: [
        ["1", "cash out carefoure", "10", "10.10.2020"],
        ["2", "cash out", "20", "10.20.2020"],
        ["3", "transer", "40", "10.30.2020"],
        ["4", "cash in", "50", "10.10.2020"],
        ["1", "cash out carefoure", "10", "10.10.2020"],
        ["2", "cash out", "20", "10.20.2020"],
        ["3", "transer", "40", "10.30.2020"],
        ["4", "cash in", "50", "10.10.2020"],
        ["1", "cash out carefoure", "10", "10.10.2020"],
        ["2", "cash out", "20", "10.20.2020"],
        ["3", "transer", "40", "10.30.2020"],
        ["4", "cash in", "50", "10.10.2020"],
        ["1", "cash out carefoure", "10", "10.10.2020"],
        ["2", "cash out", "20", "10.20.2020"],
        ["3", "transer", "40", "10.30.2020"],
        ["4", "cash in", "50", "10.10.2020"],
        ["1", "cash out carefoure", "10", "10.10.2020"],
        ["2", "cash out", "20", "10.20.2020"],
        ["3", "transer", "40", "10.30.2020"],
        ["4", "cash in", "50", "10.10.2020"]
      ],
      widthArr: [40, 110, 80, 110]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerLogo}>
          <Image source={logo} style={{ width: 150 }} />
        </View>
        <ScrollView>
          <View style={styles.tableMargin}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={this.state.tableHead}
                style={styles.head}
                textStyle={styles.headertext}
                widthArr={this.state.widthArr}
              />
              <Rows
                data={this.state.tableData}
                widthArr={this.state.widthArr}
                textStyle={styles.bodytext}
              />
            </Table>
          </View>
        </ScrollView>
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

  head: { height: 30, backgroundColor: "#D0C21D" },
  headertext: { marginLeft: 6, marginRight: 6, color: "#ffffff" },
  bodytext: { marginLeft: 6, marginRight: 6, color: "#202945" }
});
