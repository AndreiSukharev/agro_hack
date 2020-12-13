import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumAuthRoutes {
    login = "Login",
    signUp = "SignUp",
    forgottenPassword = "ForgottenPassword"
}

type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgottenPassword: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();

export type NavigationAuthProps<T extends keyof AuthStackParamList> = StackScreenProps<AuthStackParamList, T>;

