import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import TransactionComponent from "../transaction/transaction";
import { styles } from "./transactionslisting-styles";

function TransactionsListingComponent({ data }) {
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
export { TransactionsListingComponent };
