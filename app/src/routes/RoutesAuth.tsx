import React from "react";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ForgottenPassword from "../screens/auth/ForgottenPassword";
import {AuthStack, EnumAuthRoutes} from "../types/routes-type/routes-auth-types";
import {navigationColours} from "../styles";


const RoutesAuth: React.FC<any> = ({}) => {
    return (
            <AuthStack.Navigator
                initialRouteName={EnumAuthRoutes.login}
                screenOptions={navigationColours}
            >
                <AuthStack.Screen name={EnumAuthRoutes.login} component={Login}/>
                <AuthStack.Screen name={EnumAuthRoutes.signUp} component={SignUp}/>
                <AuthStack.Screen name={EnumAuthRoutes.forgottenPassword} component={ForgottenPassword}/>
            </AuthStack.Navigator>
    )
};

export default RoutesAuth;
