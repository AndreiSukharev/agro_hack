import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumMockIndexRoutes {
    mock = "Mock",
}

type MockIndexStackParamList = {
    Mock: undefined;
};

export const ProfileIndexStack = createStackNavigator<MockIndexStackParamList>();

export type NavigationProfileIndexProps<T extends keyof MockIndexStackParamList> = StackScreenProps<MockIndexStackParamList, T>;

