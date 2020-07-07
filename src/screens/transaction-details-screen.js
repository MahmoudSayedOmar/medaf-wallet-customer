import React, { Component } from "react";
import { View,Text, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import {TransactionSalesDetailsComponent} from "../components/transactiondetails/transactionsalesdetails"

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
    debugger;
    return (

      <View style={styles.container}>
        <View>
         
                 <TransactionSalesDetailsComponent item={this.props.transactionDetails}  />
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
