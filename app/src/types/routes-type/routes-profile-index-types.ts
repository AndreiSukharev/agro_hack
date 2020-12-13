import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumProfileIndexRoutes {
    profile = "Profile",
}

type ProfileIndexStackParamList = {
    Profile: undefined;
};

export const ProfileIndexStack = createStackNavigator<ProfileIndexStackParamList>();

export type NavigationProfileIndexProps<T extends keyof ProfileIndexStackParamList> = StackScreenProps<ProfileIndexStackParamList, T>;

