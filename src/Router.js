import React from 'react';
import {Scene, Router, Actions} from "react-native-router-flux";
import LoginForm from "./components/LoginForm/LoginForm";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate/EmployeeCreate";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key={"root"} hideNavBar>
                <Scene key={"auth"}>
                    <Scene key={"login"} component={LoginForm} title={"Please Login"}/>
                </Scene>
                <Scene key={"main"}>
                    <Scene
                        key={"employeeList"}
                        component={EmployeeList}
                        title={"Employees"}
                        rightTitle={"Add"}
                        onRight={()=> Actions.push('employeeCreate')}
                    />
                    <Scene
                        key={"employeeCreate"}
                        component={EmployeeCreate}
                        title={'Create Employee'}/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;