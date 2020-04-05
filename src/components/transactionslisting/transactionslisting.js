import React from "react";
import { SafeAreaView, FlatList, StyleSheet, View } from "react-native";
import { TransactionComponent } from "../transaction/transaction";
import { styles } from "./transactionslisting-styles";

export function TransactionsListingComponent({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <TransactionComponent item={item} />;
        }}
      />
    </SafeAreaView>
  );
}
