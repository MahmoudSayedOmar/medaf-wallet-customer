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

    const today = new Date(Date.now());
    const endDay = new Date(Date.now());

    endDay.setMonth(endDay.getMonth() - 1);

    this.state = {
      dateFrom: endDay,
      dateTo: today,
      selected: undefined,
      filterShowHide: "hide",
      results: {
        items: [],
      },
    };
  }
  static mapStatetToProps(state: State) {
    return {
      transactionsHistory: state.userInfo.transactionsHistory,
      finalBalance: state.userInfo.finalBalance,
      intialBalance: state.userInfo.intialBalance,
    };
  }
  componentWillMount() {
    this.props.tryRetriveTransactions({
      StartDate: this.state.dateFrom,
      EndDate: this.state.dateTo,
    });
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
          finalBalance={this.props.finalBalance}
          intialBalance={this.props.intialBalance}
          onToDateChange={(dateTo) => this.setState({ dateTo })}
          onFromDateChange={(dateFrom) => this.setState({ dateFrom })}
          selected={this.state.selected}
          onValueChange={this.onValueChange.bind(this)}
          dateFrom={this.state.dateFrom}
          dateTo={this.state.dateTo}
          onPressFilter={() => {
            this.props.tryRetriveTransactions({
              StartDate: this.state.dateFrom,
              EndDate: this.state.dateTo,
              Status: this.state.selected,
            });
            this.onShowHideFilters();
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
