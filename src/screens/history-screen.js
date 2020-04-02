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

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import {
  TransactionsListingComponent,
  HistoryHeaderComponent
} from "../components";
export class HistoryContainer extends Component {
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
  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
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
        <HistoryHeaderComponent
          filterShowHide={this.state.filterShowHide}
          onShowHideFilters={this.onShowHideFilters.bind(this)}
          onToDateChange={dateTo => this.setState({ dateTo })}
          onFromDateChange={dateFrom => this.setState({ dateFrom })}
          selected={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
        />
        <TransactionsListingComponent data={this.state.data} />
      </View>
    );
  }
}

export const HistoryScreen = connect(
  HistoryContainer.mapStatetToProps,
  HistoryContainer.mapDispatchToProps
)(HistoryContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  }
});
