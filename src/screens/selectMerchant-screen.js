import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { SelectMerchantComponent } from "../components";
export class SelectMerchantContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: "undefined"
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
    return (
      <View style={styles.container}>
        <SelectMerchantComponent
          onValueChange={value => this.onValueChange(value)}
          selected={this.state.selected}
          onNavigateTo={goTo => this.onNavigateTo(goTo)}
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
