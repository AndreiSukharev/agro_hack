import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumChatRoutes {
    support = "Support",
}

type ChatStackParamList = {
    Support: undefined;
};

export const ChatIndexStack = createStackNavigator<ChatStackParamList>();

export type NavigationChatProps<T extends keyof ChatStackParamList> = StackScreenProps<ChatStackParamList, T>;

