import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {CardSection} from "../common";
import {Actions} from "react-native-router-flux";

const ListItem = ({employee}) => {

    const onRowPress = () => {
        Actions.employeeEdit({
            employee: employee.item
        });
    };

    return (
        <TouchableOpacity onPress={onRowPress}>
            <View>
                <CardSection style={{padding: 10, backgroundColor: 'white'}}>
                    <Text style={{fontSize: 18, paddingLeft: 20}}>{employee.item.name}</Text>
                </CardSection>
            </View>
        </TouchableOpacity>    );
};

export default ListItem;