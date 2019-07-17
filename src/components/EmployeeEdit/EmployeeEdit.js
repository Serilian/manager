import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Card, CardSection, CustomButton} from "../common";
import {updateEmployee, removeEmployee} from '../../store/actions/employees';
import {connect} from 'react-redux';
import EmployeeForm from "../EmployeeForm/EmployeeForm";


const EmployeeEdit = ({updateEmployee, employee, removeEmployee}) => {

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

    const handleEditEmployee = () => {
        updateEmployee(employee.uid, formData);
    };

    const handleDeleteEmployee = () => {
        removeEmployee(employee.uid);
    };

    return (
        <KeyboardAvoidingView>
            <Card>
                <EmployeeForm phone={phone} name={name} shift={shift} onChange={onChange}/>
                <CardSection>
                    <CustomButton onPress={handleEditEmployee}>Save changes</CustomButton>
                </CardSection>
                <CardSection>
                    <CustomButton onPress={handleDeleteEmployee}>Delete employee</CustomButton>
                </CardSection>
            </Card>
        </KeyboardAvoidingView>
    );
};

export default connect(null, {updateEmployee, removeEmployee})(EmployeeEdit);