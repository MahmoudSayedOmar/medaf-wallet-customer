import React from "react";
import { View, Text } from "react-native";
import { styles } from "./transaction-styles";

function TransactionComponent({ item }) {
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
          {(() => {
            if (item.type == "transfer") {
              return (
                <Text style={styles.listBody}>
                  Transfer To: {item.transferTo}
                </Text>
              );
            } else if (item.type == "payment") {
              return <Text>Bill Type: {item.billType}</Text>;
            } else if (item.type == "cashIn") {
              return <Text>Cash In By: {item.empolyeeName}</Text>;
            } else if (item.type == "cashOut") {
              return <Text>Cash Out By: {item.empolyeeName}</Text>;
            }
          })()}
        </View>
        {/* <Text style={styles.arrow}>></Text> */}
      </View>

      <Text style={styles.listBalance}>
        Remaining amount: {item.remainingAmount}
      </Text>
    </View>
  );
}
export default TransactionComponent;
