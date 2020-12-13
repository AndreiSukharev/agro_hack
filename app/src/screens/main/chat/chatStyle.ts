import {StyleSheet} from "react-native";
import {styleColors} from "../../../styles";

export const chatStyle = StyleSheet.create({
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        borderRadius: 10,
        padding: "2%",
        fontWeight : 'bold',
        backgroundColor: styleColors.primary
    },
    text: {
        color: "white",
        fontWeight : 'bold',
        fontSize: 15
    }
});
