import React from "react";
import { View, Text } from "react-native";
import { styles } from "./historyfilter-styles";
import {
  Button,
  Icon,
  DatePicker,
  Picker,
  Header,
  Right,
  Body,
  Left,
  Title,
} from "native-base";

function HistoryFilterComponent({
  filterShowHide,
  onShowHideFilters,
  onFromDateChange,
  onToDateChange,
  selected,
  onValueChange,
  onPressFilter,
}) {
  return (
    <View style={styles.filter}>
      <Text onPress={() => onShowHideFilters()}>Filter</Text>

      {filterShowHide === "hide" ? null : (
        <View
          style={{
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.datePickerViewLeft}>
              <DatePicker
                style={styles.datePicker}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="from Date"
                textStyle={{ color: "#202945" }}
                placeHolderTextStyle={{
                  fontSize: 15,
<<<<<<< HEAD
                  color: "#202945"
=======
                  color: "#D0C21D",
>>>>>>> 5bc6c09e56e626590fc3cc6d610d9870e8405d30
                }}
                onDateChange={onFromDateChange}
                disabled={false}
              />
            </View>
            <View style={styles.datePickerViewRight}>
              <DatePicker
                style={styles.datePicker}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="To Date"
                textStyle={{ color: "#202945" }}
                placeHolderTextStyle={{
                  fontSize: 15,
<<<<<<< HEAD
                  color: "#202945"
=======
                  color: "#D0C21D",
>>>>>>> 5bc6c09e56e626590fc3cc6d610d9870e8405d30
                }}
                onDateChange={onToDateChange}
                disabled={false}
              />
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.selectField}>
              <Picker
                renderHeader={(backAction) => (
                  <Header style={{ backgroundColor: "#D0C21D" }}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{ color: "#FFFFFF" }} />
                      </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                      <Title style={{ color: "#FFFFFF" }}>
                        Transaction Type
                      </Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                iosHeader="Transaction"
                placeholder="Transaction Type"
                placeholderStyle={{ color: "#202945" }}
                iosIcon={
                  <Icon name="arrow-down" style={{ color: "#202945" }} />
                }
                textStyle={{ color: "#202945" }}
                itemStyle={{
                  backgroundColor: "#ffffff",
                  marginLeft: 0,
                  paddingLeft: 10,
                  color: "#202945"
                }}
                itemTextStyle={{ color: "#202945" }}
                selectedValue={selected}
                onValueChange={onValueChange}
              >
                <Picker.Item label="Cash In" value="key0" />
                <Picker.Item label="Cash Out" value="key1" />
                <Picker.Item label="Transfer" value="key2" />
              </Picker>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button style={styles.buttonStyle} onPress={onPressFilter}>
              <Text style={{ color: "#202945" }}>Filter</Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
}
export { HistoryFilterComponent };
