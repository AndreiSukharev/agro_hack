import {DefaultTheme} from "react-native-paper";
import {styleColors} from "../styles";

export const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        primary: styleColors.primary,
        accent: styleColors.accent,
    },
};
