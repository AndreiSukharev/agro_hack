import * as React from "react";
import {CreditIndexStack, EnumCreditIndexRoutes} from "../types/routes-type/routes-credit-index-types";
import {navigationColours} from "../styles";
import CreditStage1 from "../screens/main/credits/CreditStage1";

const RoutesScenarioIndex: React.FC<any> = ({}) => {
    return (
            <CreditIndexStack.Navigator
                initialRouteName={EnumCreditIndexRoutes.consultation}
                screenOptions={navigationColours}
            >
                <CreditIndexStack.Screen name="Заявка" component={CreditStage1}/>
            </CreditIndexStack.Navigator>
    )
};

export default RoutesScenarioIndex;
