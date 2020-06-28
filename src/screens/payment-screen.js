

import React, { Component } from "react";
import {
    ImageBackground,
    TextInput,
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../state/state";

import {PaymentProvider} from "../components/payment/select-payment"


var Lightbox = require('./lightbox');

import { WebView } from 'react-native-webview';

var logo = require("../../assets/download.jpg");

export class PaymentContainer extends Component {
    webview = null;
    constructor() {
        super();

    }

    componentWillMount() {

        this.GetLightBoxUrl( false, false);
    }

    static mapStateToProps(state:State){
      return{
        orderId:state.payment.orderId,
        amount:state.payment.amount
      }
    }

    handleWebViewNavigationStateChange = newNavState => {
      debugger;
        const { url } = newNavState;

        if (!url) return;
    
        // one way to handle a successful form submit is via query strings
        if (url.includes('?message=success')) {
          this.webview.stopLoading();
          // calling api for update order
          // maybe close this view?
        }
    
        // one way to handle errors is via query string
        if (url.includes('?errors=true')) {
          this.webview.stopLoading();
        }
    
        // redirect somewhere else
        if (url.includes('google.com')) {
          const newURL = 'https://logrocket.com/';
          const redirectTo = 'window.location = "' + newURL + '"';
          this.webview.injectJavaScript(redirectTo);
        }
      };

    GetLightBoxUrl(hideCloseButton,isEnableReturnUrl) {
        debugger;
        var lightBoxDoamin = 'https://grey.paysky.io:9006/PayInterface'; //'http://www.testsite.com:3629/';/https://upg.egyptianbanks.com:3008/PayInterfac';
        var paymentMethodFromLightBox = null;
        var mId = 54482;
        var tId = 33315050;
        var orderId = "";
        var amount = this.props.amount;
        var MerchantReference = this.props.orderId;
        var returnUrl = "https://logrocket.com";
        var secureHash = "";
        var trxDateTime = "";
        var lightboxHostedQueryString = '/?';
        lightboxHostedQueryString += 'paymentMethodFromLightBox=' + paymentMethodFromLightBox + '&';
        lightboxHostedQueryString += 'OrderID=' + orderId + '&';
        lightboxHostedQueryString += 'MID=' + mId + '&';
        lightboxHostedQueryString += 'MerchantReference=' + MerchantReference + '&';
        lightboxHostedQueryString += 'amount=' + amount + '&';
        lightboxHostedQueryString += 'TID=' + tId + '&';
        lightboxHostedQueryString += 'secureHashAnonymous=' + secureHash + '&';
        lightboxHostedQueryString += 'trxDateTime=' + trxDateTime + '&';
        debugger;

        if (hideCloseButton) {
            lightboxHostedQueryString += 'hideCloseButton=' + true + '&';
            if (isEnableReturnUrl) {
                lightboxHostedQueryString += 'returnUrl=' + returnUrl;
            }
        }
        return lightBoxDoamin + '/Home/LightboxHostedCheckout' + lightboxHostedQueryString;
    }

    render() {
      console.log("Amount",this.props.amount);
      console.log("merchantRefernce",this.props.orderId)

        return (
            <View style={{flex:1}}>
                <WebView 
                ref={ref => (this.webview = ref)}
                source={{ uri: this.GetLightBoxUrl(false,false) }}
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
                />
            </View>
        );
    }
}

export const PaymentScreen = connect(
  PaymentContainer.mapStateToProps,
  PaymentContainer.mapDispatchToProps
)(PaymentContainer);
