import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import {
  TransactionsListingComponent,
  HistoryHeaderComponent,
} from "../components";

import { tryRetriveTransactions } from "../state";

export class HistoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      dateFrom: "",
      dateTo: "",
      selected: undefined,
      filterShowHide: "hide",
      results: {
        items: [],
      },
    };
  }
  static mapStatetToProps(state: State) {
    return { transactionsHistory: state.userInfo.transactionsHistory };
  }
  componentWillMount() {
    this.props.tryRetriveTransactions();
  }
  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryRetriveTransactions }, dispatch);
  }
  setDate(newDate) {
    this.setState({ dateFrom: newDate });
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
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
          onToDateChange={(dateTo) => this.setState({ dateTo })}
          onFromDateChange={(dateFrom) => this.setState({ dateFrom })}
          selected={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
          onPressFilter={() => {
            this.props.tryRetriveTransactions({
              StartDate: this.state.dateFrom,
              EndDate: this.state.dateTo,
              Status: this.state.selected,
            });
          }}
        />
        <TransactionsListingComponent data={this.props.transactionsHistory} />
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
    backgroundColor: "#FFFFFF",
  },
});
