import React from "react";
import { styles } from "./transactiondetails-styles";
import { View, Image } from "react-native";

import { Card, CardItem, Body, Text, Button, Spinner } from "native-base";

//var logo = require("../download.jpg");

export function TransactionSalesDetailsComponent({ item }) {
   
  
    return (
          <View style={styles.container}>
            <View style={styles.centerLogo}>
              <Text style={styles.storeTitle}>Store Name</Text>
             
              <Text style={styles.transactionDate}>Mon 25 Feb, 2020</Text>
            </View>
            <View style={styles.restOfDetails}>
              <Text style={styles.detailsTitle}>UserName : </Text>
              <Text style={styles.detailsData}>mohsen abdel raoof</Text>
            </View>
            <View style={styles.restOfDetails}>
              <Text style={styles.detailsTitle}>Ref. Number : </Text>
              <Text style={styles.detailsData}>#47988234</Text>
            </View>
            <View style={styles.restOfDetails}>
              <Text style={styles.detailsTitle}>Total Amount : </Text>
              <Text style={styles.detailsData}>5894 EGP</Text>
            </View>
            <View style={styles.restOfDetails}>
              <Text style={styles.detailsTitle}>Printed On : </Text>
              <Text style={styles.detailsData}>Mon 25 Feb, 2020</Text>
            </View>
            <View style={styles.centerLogo}>
             
            </View>
          </View>
        );
      

}
  