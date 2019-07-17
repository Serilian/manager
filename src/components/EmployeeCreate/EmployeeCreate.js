import React, {useState} from 'react';
import {View, Text, Picker, KeyboardAvoidingView} from 'react-native';
import {Input, Card, CardSection, CustomButton} from "../common";
import {addEmployee} from '../../store/actions/employees';
import {connect} from 'react-redux';
import EmployeeForm from "../EmployeeForm/EmployeeForm";


const EmployeeCreate = ({addEmployee, employee}) => {

    const [formData, setFormData] = useState({
        name: employee ? employee.name: '',
        phone: employee ? employee.phone : '',
        shift: employee ? employee.shift: 'Monday'
    });

    const {name, phone, shift} = formData;

    const onChange = (field, text) => {
        setFormData({
            ...formData,
            [field]: text
        });
    };

    const handleAddEmployee = () => {
        addEmployee(formData);
    };

    return (
        <KeyboardAvoidingView>
            <Card>
               <EmployeeForm phone={phone} name={name} shift={shift} onChange={onChange}/>
                <CardSection>
                    <CustomButton onPress={handleAddEmployee}>Add employee</CustomButton>
                </CardSection>
            </Card>
        </KeyboardAvoidingView>
    );
};

export default connect(null, {addEmployee})(EmployeeCreate);