import React from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../../../stores/redux/system/action";
import {Button} from "react-native";

const Logout: React.FC<LinkDispatchProps> = ({logoutReducer}) => {

    const logout = () => {
        // todo: bug if navigate in several routes in the app and then log out, app reloads the login page several time
        logoutReducer();
    }

    return (
        <Button title="logout" onPress={logout}/>
    );
}



interface LinkDispatchProps {
    logoutReducer: () => void,
}

const mapDispatchToProps = (dispatch : any) => ({
    logoutReducer: () => dispatch(logoutUser()),
});

export default connect(null, mapDispatchToProps)(Logout);
