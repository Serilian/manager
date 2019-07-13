import React, {useEffect} from 'react';
import _ from 'lodash';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Spinner} from "../common";
import {getEmployees} from "../../store/actions/employees";

import ListItem from "./ListItem";


const EmployeeList = ({employees, getEmployees, loading}) => {

        useEffect(() => {
            getEmployees();
        }, []);

        return (

            <View>
                {loading && employees.length === 0 ? (<Spinner style={{marginTop: 80}}/>) : (<FlatList
                    keyExtractor={emp => emp.uid}
                    data={employees}
                    renderItem={emp =>
                        <ListItem employee={emp} />
                    }/>)}
            </View>
        )
    }
;

const mapStateToProps = state => {

    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid}
    });
    return {
        employees,
        loading: state.ui.loading
    };
};

export default connect(mapStateToProps, {getEmployees})(EmployeeList);