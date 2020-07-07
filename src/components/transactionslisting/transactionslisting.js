import React from "react";
import { SafeAreaView, FlatList, StyleSheet, View, Text } from "react-native";
import { TransactionComponent } from "../transaction/transaction";
import { styles } from "./transactionslisting-styles";

export function TransactionsListingComponent({ data ,navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {data.length == 0 ? (
        <Text>There is no transactions on this dates</Text>
      ) : (
        <FlatList
          data={data}
          
          renderItem={({ item }) => {
            return <TransactionComponent item={item} navigation={navigation}  />;
          }}
        />
      )}
    </SafeAreaView>
  );
}

