import {createMaterialBottomTabNavigator, MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";

export enum EnumMainRoutes {
    posts = "Posts",
    photo = "Photo",
    chat = "Chat",
    consultation = "Consultation",
}

type MainStackParamList = {
    Posts: undefined;
    Photo: undefined;
    Chat: undefined;
    Consultation: undefined;
};

export const MainStack = createMaterialBottomTabNavigator<MainStackParamList>();

export type NavigationMainProps<T extends keyof MainStackParamList> = MaterialBottomTabScreenProps<MainStackParamList, T>;

