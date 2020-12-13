import React, {Component} from 'react';
import Logout from "./Logout";
import {SafeAreaView} from "react-native-safe-area-context";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {styles} from "../../styles";
import IncomeExpensesPie from "./IncomeExpensesPie";
import LastSpendingsChart from "./LastSpendingsChart";
import {Text, Title, Divider} from "react-native-paper";

export default class Profile extends Component {

    render() {
        return (
            <DismissKeyboardWrapper>
                <SafeAreaView style={styles.containerCenter}>
                    <Title>Current Balance</Title>
                    <Title>7 780,15 €</Title>
                    <Divider/>
                    <Text>Your income and expenses for October</Text>
                    <IncomeExpensesPie/>
                    <Text>Your last spendings</Text>
                    <LastSpendingsChart/>
                    <Logout/>
                </SafeAreaView>
            </DismissKeyboardWrapper>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // backgroundColor: "yellow",
//     },
//     settings: {
//         // flex: 1,
//         justifyContent: "center",
//         alignItems: "flex-end",
//         backgroundColor: "green",
//     },
//     profileHeader: {
//         // flex: 5,
//     },
//     pointsBar: {
//         // flex: 1,
//     },
//
// });


