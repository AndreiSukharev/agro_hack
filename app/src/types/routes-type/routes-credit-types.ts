import {createMaterialTopTabNavigator, MaterialTopTabScreenProps} from "@react-navigation/material-top-tabs";

export enum EnumCreditRoutes {
    stage1 = "Scenarios",
    stage2 = "Result",
    stage3 = 'Stage 3',
}

type CreditStackParamList = {
    Scenarios: undefined;
    Result: undefined;
    Stage3: undefined;
};

export const CreditStack = createMaterialTopTabNavigator<CreditStackParamList>();

export type NavigationCreditProps<T extends keyof CreditStackParamList> = MaterialTopTabScreenProps<CreditStackParamList, T>;
