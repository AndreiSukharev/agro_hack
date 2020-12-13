import React from 'react';
import {StyleSheet, View} from "react-native";
import {PieChart } from 'expo-chart-kit';
import { Dimensions } from 'react-native'

const IncomeExpensesPie: React.FC<any> = () => {

    const data = [
        { name: 'Essentials', population: 2926.87, color: '#F5A623', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Income', population: 5461, color: '#FC6A13', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Lifestyle', population: 1461, color: '#D0021B', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Savings', population: 302, color: '#FCB9A4', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ]
    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }

    return (
        <View>
            <PieChart
                data={data}
                width={Dimensions.get('window').width}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        // backgroundColor: "green"
    },
    text: {
        alignItems: "center",
    },
    bar: {
        height: 25,
    }
});


export default IncomeExpensesPie;


