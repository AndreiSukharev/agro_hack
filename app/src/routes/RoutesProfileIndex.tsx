import * as React from "react";
import {ProfileIndexStack, EnumProfileIndexRoutes} from "../types/routes-type/routes-profile-index-types";
import Profile from "../screens/main/profile/Profile";
import {navigationColours} from "../styles";

const RoutesProfileIndex: React.FC<any> = ({}) => {
    return (
            <ProfileIndexStack.Navigator
                initialRouteName={EnumProfileIndexRoutes.profile}
                screenOptions={navigationColours}
            >
                <ProfileIndexStack.Screen name={EnumProfileIndexRoutes.profile} component={Profile}/>
            </ProfileIndexStack.Navigator>
    )
};

export default RoutesProfileIndex;
