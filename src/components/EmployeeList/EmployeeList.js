import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection} from "../common";

const EmployeeList = ({employees}) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            {employees !==null && employees.length > 0 ?
                (employees.map(emp => (
                    <Card key={emp.phone} style={{padding: 10}}>
                        <Text>{emp.name}</Text>
                        <Text>{emp.phone}</Text>
                        <Text>{emp.shift}</Text>
                    </Card>
                ))) : (<Text>No employees to show</Text>) }
        </View>
    );
};

const mapStateToProps = state => ({
    employees: state.employees
});

export default connect(mapStateToProps)(EmployeeList);