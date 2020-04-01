import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import Transacion from "../transaction/transaction";
import { styles } from "./transactionslisting-styles";

function TransactionsListingComponent({ data }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Transacion item={item} />;
        }}
      />
    </SafeAreaView>
  );
}
export { TransactionsListingComponent };
