import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumCreditIndexRoutes {
    consultation = "Consultation",
}

type CreditIndexStackParamList = {
    Consultation: undefined;
};

export const CreditIndexStack = createStackNavigator<CreditIndexStackParamList>();

export type NavigationCreditIndexProps<T extends keyof CreditIndexStackParamList> = StackScreenProps<CreditIndexStackParamList, T>;

