import React, { Component } from "react";
import { View,Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";


import { GetTransactionDetails } from "../state";

 class TransactionDatailsContainer extends Component {
  constructor() {
    super();


  }

  componentWillMount(date){
   
    console.log("this.props.navigation",this.props.route.params);
 this.props.GetTransactionDetails(this.props.route.params);
  }
  
 
  static mapStatetToProps(state: State) {
    debugger;
    return {
      transactionDetails: state.userInfo.selectedTransaction,
     
    };
  }
 

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ GetTransactionDetails }, dispatch);
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
    <Text>{this.props.transactionDetails.id}</Text>
    <Text>{this.props.transactionDetails.cardNo}</Text>
    <Text>{this.props.transactionDetails.Name}</Text>
        </View>
     
      </View>
    );
  }
}

export const TransactionDetailsScreen = connect(
  TransactionDatailsContainer.mapStatetToProps,
  TransactionDatailsContainer.mapDispatchToProps
)(TransactionDatailsContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF",
  },
});
