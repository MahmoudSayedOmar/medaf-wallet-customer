import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React, { Component, useState } from "react";
import { View, Text, Form, Item, Input, Icon, Picker } from "native-base"


export function PaymentProvider(props) {
  console.log("Props",props);
  const [selectedValue, setSelectedProvider] = useState(undefined);
  const[amount,setAmount]=useState(0);

  function onValueChange(value: string) {

    setSelectedProvider(value);

  }

  function sumbitValue() {
    console.log("amount",amount);
    console.log("selecteProvider",selectedValue);
    let vaules={};
    vaules.amount=amount;
    vaules.selecteProvider=selectedValue;
     props.SelectPaymentProvider(vaules);
  }
  let progressStepsStyle = {
    activeStepIconBorderColor: "#D0C21D",
    activeLabelColor: "#202945",
    activeStepNumColor: "#ffffff",
    activeStepIconColor: "#202945",
    completedStepIconColor: "#D0C21D",
    completedProgressBarColor: "#D0C21D",
    completedCheckColor: "#ffffff",
  };
  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <ProgressSteps {...progressStepsStyle}>
        <ProgressStep label="Select You Provider">
          <View style={{ flex: 1 }}>
            <Form>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                headerBackButtonText="Baaack!"
                selectedValue={selectedValue}
                onValueChange={onValueChange.bind(this)}
              >
                <Picker.Item label="PaySky" value="PaySky" />
                <Picker.Item label="Master" value="Master" />
                <Picker.Item label="Visa" value="Visa" />
              </Picker>
            </Form>
          </View>
        </ProgressStep>
        <ProgressStep onSubmit={sumbitValue.bind(this)}
          label="Enter You Amount">
          <View style={{ flex: 1 }}>
            <Form>
              <Item>
                <Input keyboardType={'numeric'} onChangeText={(value)=>{
                  setAmount(value)
                }} placeholder="Amount" />
              </Item>
            </Form>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  )
}

