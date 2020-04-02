import React from "react";
import { View, Text } from "react-native";
import { styles } from "./transaction-styles";

function TransactionComponent({ item }) {
  let TransactionType = null;
  switch (item.type) {
    case "transfer": {
      TransactionType = (
        <Text style={styles.listBody}>Transfer To: {item.transferTo}</Text>
      );
    }
    case "payment": {
      TransactionType = <Text>Bill Type: {item.billType}</Text>;
    }
    case "cashIn": {
      TransactionType = <Text>Cash In By: {item.empolyeeName}</Text>;
    }
    case "cashOut": {
      TransactionType = <Text>Cash Out By: {item.empolyeeName}</Text>;
    }
  }
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
          <TransactionType />
        </View>
      </View>

      <Text style={styles.listBalance}>
        Remaining amount: {item.remainingAmount}
      </Text>
    </View>
  );
}
export default TransactionComponent;
