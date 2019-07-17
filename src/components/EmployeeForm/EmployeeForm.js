import React from 'react';
import {Card, CardSection, Input} from "../common";
import {Picker, Text, View} from "react-native";

const EmployeeForm = ({phone, name, shift, onChange}) => {
    return (
        <View>
            <CardSection>
                <Input label={"Name"} placeholder={"John Doe"} value={name}
                       onChangeText={(text) => onChange('name', text)}/>
            </CardSection>
            <CardSection>
                <Input label={"Phone number"} placeholder={"555-555-555"} value={phone}
                       onChangeText={(text) => onChange('phone', text)}/>
            </CardSection>
            <CardSection
                style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 120}}>
                <Text style={{alignSelf: 'flex-start', paddingLeft: 20, fontSize: 18}}>Select shift day</Text>
                <Picker style={{width: '100%', height: 60}} selectedValue={shift}
                        onValueChange={(val) => onChange('shift', val)}>
                    <Picker.Item label={"Monday"} value={"Monday"}/>
                    <Picker.Item label={"Tuesday"} value={"Tuesday"}/>
                    <Picker.Item label={"Wednesday"} value={"Wednesday"}/>
                    <Picker.Item label={"Thursday"} value={"Thursday"}/>
                    <Picker.Item label={"Friday"} value={"Friday"}/>
                    <Picker.Item label={"Saturday"} value={"Saturday"}/>
                    <Picker.Item label={"Sunday"} value={"Sunday"}/>
                </Picker>
            </CardSection>
        </View>
    );
};

export default EmployeeForm;