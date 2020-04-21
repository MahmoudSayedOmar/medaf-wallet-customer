import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Picker } from "native-base";
import { SelectMerchantComponent } from "../components";
export class SelectMerchantContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: "undefined",
      merchantList: [
        { id: "1", merchantName: "name1" },
        { id: "2", merchantName: "name2" },
        { id: "3", merchantName: "name3" }
      ]
    };
  }
  static mapStatetToProps(state: State) {
    return {};
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onNavigateTo(goTo) {
    this.props.navigation.navigate(goTo);
  }

  render() {
    let allMerchantList = this.state.merchantList.map((eachMerchant, index) => {
      return (
        <Picker.Item
          label={eachMerchant.merchantName}
          value={eachMerchant.id}
        />
      );
    });
    return (
      <View style={styles.container}>
        <SelectMerchantComponent
          onValueChange={value => this.onValueChange(value)}
          selected={this.state.selected}
          onNavigateTo={goTo => this.onNavigateTo(goTo)}
          listOfMerchants={allMerchantList}
        />
      </View>
    );
  }
}

export const SelectMerchantScreen = connect(
  SelectMerchantContainer.mapStatetToProps,
  SelectMerchantContainer.mapDispatchToProps
)(SelectMerchantContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "3%",
    backgroundColor: "#FFFFFF"
  }
});
