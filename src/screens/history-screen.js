import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import {
  TransactionsListingComponent,
  HistoryHeaderComponent,
} from "../components";
import { Spinner } from "native-base";

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
      selected: 0,
      filterShowHide: "hide",
      results: {
        items: [],
      },
    };
  }

  componentDidMount(){
    debugger;
    console.log("componentDidMount")
    this._unsubscribe=this.props.navigation.addListener('focus', () => {
      debugger;
     this.ReCallHistory();
    });;
  }
  componentWillUnmount() {

    this._unsubscribe();
  }
 
  static mapStatetToProps(state: State) {
    debugger;
    return {
      transactionsHistory: state.userInfo.transactionsHistory,
      finalBalance: state.userInfo.finalBalance,
      intialBalance: state.userInfo.intialBalance,
      loadingTransactions: state.userInfo.loadingTransactions,
    };
  }
 
  ReCallHistory(){
    this.props.tryRetriveTransactions(
      {
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
    console.log("this props",this.props)
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
              StartDate: new Date(
                this.state.dateFrom.setDate(this.state.dateFrom.getDate() + 1)
              ),
              EndDate: new Date(
                this.state.dateTo.setDate(this.state.dateTo.getDate() + 1)
              ),
              PointTransactionStatus: this.state.selected,
            });
            this.onShowHideFilters();
          }}
        />
        {this.props.loadingTransactions ? (
          <Spinner style={{ alignSelf: "center" }} color="#D0C21D" />
        ) : (
          <TransactionsListingComponent data={this.props.transactionsHistory} navigation={this.props.navigation} />
        )}
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
