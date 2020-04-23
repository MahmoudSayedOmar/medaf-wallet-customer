import React from "react";
import { View, Text } from "react-native";
import { styles } from "./transaction-styles";

export function TransactionComponent({ item }) {
  let TransactionType = null;
  switch (item.Status) {
    case "4":
      TransactionType = (
        <Text style={styles.listBody}>Transfer To: {item.transferTo}</Text>
      );
      break;

    case "3":
      TransactionType = <Text>Bill Type: {item.billType}</Text>;
      break;
    case "1":
      TransactionType = <Text>Cash In By: {item.EmployeeName}</Text>;
      break;
    case "2":
      TransactionType = <Text>Cash Out By: {item.EmployeeName}</Text>;
      break;
  }
  debugger;
  return (
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            width: "90%",
          }}
        >
          <Text style={styles.title}>{item.PointsTransactionsName}</Text>
          <Text style={styles.listBody}>{item.Amount}</Text>
          <Text style={styles.listBody}>{item.Creationdatetime}</Text>
          {TransactionType}
        </View>
      </View>

      <Text style={styles.listBalance}>
        Remaining amount: {item.remainingAmount}
      </Text>
    </View>
  );
}
