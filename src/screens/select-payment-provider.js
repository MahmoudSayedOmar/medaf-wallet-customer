import React, { Component } from "react";
import {
    View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../state/state";
import {SelectPaymentProvider } from "../state/payment/action-creator";

import {PaymentProvider} from "../components/payment/select-payment"
class SelectPaymentProvviderContainer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps) {
       debugger;
       if(nextProps.orderMessage=="Done"){
           this.props.navigation.navigate("PaymentScreen");
       }
      }
    static mapStateToProps(state: State) {
        return {
            orderId:state.payment.orderId,
            orderMessage:state.payment.orderMessage
            // isTransfer: state.transfer.isTransfer,
            // transferStatus: state.transfer.transferStatus,
            // balance: state.userInfo.balance,
            // membershipId: state.authorization.CardNo,
        };
    }
    static mapDispatchToProps(dispatch: Dispatch) {
        return bindActionCreators({ SelectPaymentProvider }, dispatch);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <PaymentProvider SelectPaymentProvider={this.props.SelectPaymentProvider} ></PaymentProvider>
            </View>
    );
    }
}
export const SelectPaymentProviderScreen = connect(
    SelectPaymentProvviderContainer.mapStateToProps,
    SelectPaymentProvviderContainer.mapDispatchToProps
)(SelectPaymentProvviderContainer);
