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
  Title
} from "native-base";

function HistoryFilterComponent({
  filterShowHide,
  onShowHideFilters,
  onFromDateChange,
  onToDateChange,
  selected,
  onValueChange
}) {
  return (
    <View style={styles.filter}>
      <Text onPress={() => onShowHideFilters()}>Filter</Text>
      <View
        style={{
          display: filterShowHide === "hide" ? "none" : "block",
          marginTop: 10
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
              textStyle={{ color: "#D0C21D" }}
              placeHolderTextStyle={{
                fontSize: 15,
                color: "#D0C21D"
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
              textStyle={{ color: "#D0C21D" }}
              placeHolderTextStyle={{
                fontSize: 15,
                color: "#D0C21D"
              }}
              onDateChange={onToDateChange}
              disabled={false}
            />
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.selectField}>
            <Picker
              renderHeader={backAction => (
                <Header style={{ backgroundColor: "#D0C21D" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#FFFFFF" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#FFFFFF" }}>Transaction Type</Title>
                  </Body>
                  <Right />
                </Header>
              )}
              mode="dropdown"
              iosHeader="Transaction"
              placeholder="Transaction Type"
              placeholderStyle={{ color: "#D0C21D" }}
              iosIcon={<Icon name="arrow-down" style={{ color: "#D0C21D" }} />}
              textStyle={{ color: "#D0C21D" }}
              itemStyle={{
                backgroundColor: "#ffffff",
                marginLeft: 0,
                paddingLeft: 10,
                color: "#D0C21D"
              }}
              itemTextStyle={{ color: "#D0C21D" }}
              selectedValue={selected}
              onValueChange={onValueChange}
            >
              <Picker.Item label="Cash In" value="key0" />
              <Picker.Item label="Cash Out" value="key1" />
              <Picker.Item label="Transfer" value="key2" />
            </Picker>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button style={styles.buttonStyle} onPress={() => {}}>
            <Text style={{ color: "#ffffff" }}>Filter</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
export { HistoryFilterComponent };
