import React from "react";
import { View, Text } from "react-native";
import { styles } from "./transaction-styles";

export function TransactionComponent({ item }) {
  let TransactionType = null;
  switch (item.type) {
    case "transfer":
      TransactionType = (
        <Text style={styles.listBody}>Transfer To: {item.transferTo}</Text>
      );
      break;

    case "payment":
      TransactionType = <Text>Bill Type: {item.billType}</Text>;
      break;
    case "cashIn":
      TransactionType = <Text>Cash In By: {item.empolyeeName}</Text>;
      break;
    case "cashOut":
      TransactionType = <Text>Cash Out By: {item.empolyeeName}</Text>;
      break;
  }
  debugger;
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            width: "90%"
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.listBody}>{item.transactionAmount}</Text>
          <Text style={styles.listBody}>{item.dataDate}</Text>
          {TransactionType}
        </View>
      </View>

      <Text style={styles.listBalance}>
        Remaining amount: {item.remainingAmount}
      </Text>
    </View>
  );
}
