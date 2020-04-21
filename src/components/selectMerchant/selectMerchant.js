import React from "react";
import { View, Text, Image } from "react-native";
import {
  Button,
  Icon,
  Picker,
  Header,
  Right,
  Body,
  Left,
  Title
} from "native-base";
import { styles } from "./selectMerchant-styles";

var logo = require("../../../assets/download.jpg");

function SelectMerchantComponent({
  selected,
  listOfMerchants,
  onValueChange,
  onNavigateTo
}) {
  return (
    <View>
      <View style={styles.centerTitle}>
        <Text style={{ fontWeight: "bold", color: "#D0C21D", fontSize: 16 }}>
          Choose Merchant
        </Text>
      </View>
      <View style={styles.centerLogo}>
        <Image source={logo} style={{ width: 150 }} />
      </View>

      <View style={styles.container}>
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
                  <Title style={{ color: "#FFFFFF" }}>List of merchants</Title>
                </Body>
                <Right />
              </Header>
            )}
            mode="dropdown"
            iosHeader="List of merchants"
            placeholder="List of merchants"
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
            {listOfMerchants}
          </Picker>
        </View>
        <Button
          style={styles.button}
          onPress={() => onNavigateTo("Application")}
        >
          <Text style={{ color: "#202945" }}>Go</Text>
        </Button>
      </View>
    </View>
  );
}
export { SelectMerchantComponent };
