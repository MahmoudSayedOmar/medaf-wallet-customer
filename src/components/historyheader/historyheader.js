import React from "react";
import { View, Text, Image } from "react-native";
import { HistoryFilterComponent } from "../historyfilter/historyfilter";
import { styles } from "./historyheader-styles";

var logo = require("../../../assets/download.jpg");

function HistoryHeaderComponent({
  filterShowHide,
  onShowHideFilters,
  onFromDateChange,
  onToDateChange,
  selected,
  onValueChange
}) {
  return (
    <View>
      <View style={styles.centerTitle}>
        <Text style={{ fontWeight: "bold", color: "#D0C21D", fontSize: 16 }}>
          History
        </Text>
      </View>
      <View style={styles.centerLogo}>
        <Image source={logo} style={{ width: 150 }} />
      </View>
      <HistoryFilterComponent
        filterShowHide={filterShowHide}
        onShowHideFilters={onShowHideFilters}
        onToDateChange={onToDateChange}
        onFromDateChange={onFromDateChange}
        selected={selected}
        onValueChange={onValueChange}
      />
      <View style={styles.filter}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              borderColor: "#D0C21D",
              borderRightWidth: 1,
              paddingRight: 10
            }}
          >
            <Text style={styles.paddingTextLeft}>
              Initial Value:<Text> 3000</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.paddingText}>
              Current Value:<Text> 5000</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export { HistoryHeaderComponent };
