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
  dateTo,
  dateFrom,
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
                defaultDate={dateFrom}
                maximumDate={dateTo}
                placeHolderTextStyle={{
                  fontSize: 15,
                  color: "#202945",
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
                defaultDate={dateTo}
                minimumDate={dateFrom}
                placeHolderTextStyle={{
                  fontSize: 15,
                  color: "#202945",
                }}
                onDateChange={onToDateChange}
                maximumDate={new Date()}
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
                  color: "#202945",
                }}
                itemTextStyle={{ color: "#202945" }}
                selectedValue={selected}
                onValueChange={onValueChange}
              >
                <Picker.Item label="All" value={0} />
                <Picker.Item label="Cash In" value={1} />
                <Picker.Item label="Cash Out" value={2} />
                <Picker.Item label="Payment" value={3} />
                <Picker.Item label="Transfer" value={4} />
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
