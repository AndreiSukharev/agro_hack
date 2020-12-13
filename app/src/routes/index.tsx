import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import RoutesAuth from "./RoutesAuth";
import RoutesMain from "./RoutesMain";
import {RootStateType} from "../stores/redux";
import {connect} from "react-redux";
import {CustomNavigationTheme} from "./theme";

type Props = LinkStateProps;

const Routes: React.FC<Props> = ({isLogged}) => {

    return (
        <NavigationContainer theme={CustomNavigationTheme}>
            {true ? <RoutesMain/> : <RoutesAuth/>}
        </NavigationContainer>
    )
};

interface LinkStateProps {
    isLogged: boolean,
}

const mapStateToProps = (state: RootStateType) => {
    return({
        isLogged: state.system!.isLogged,
    })
}

export default connect(mapStateToProps)(Routes);

