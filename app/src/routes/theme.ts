import {DefaultTheme} from "@react-navigation/native";
import {styleColors} from "../styles";


export const CustomNavigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: styleColors.primary,
    },
};
