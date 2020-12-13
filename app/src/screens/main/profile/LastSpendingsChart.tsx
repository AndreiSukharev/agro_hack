import React from 'react';
import {View} from "react-native";
import {BarChart } from 'expo-chart-kit';
import { Dimensions } from 'react-native'
import {styleColors} from "../../../styles";

const LastSpendingsChart: React.FC<any> = () => {

    const data = {
        labels: ['30 Oct', '1 Nov', '2 Nov', '3 Nov', '4 Nov', '5 Nov','6 Nov'],
        datasets: [{
            data: [ 20.99, 45.11, 102.56, 346.77, 99.23, 43.7, 262.58 ]
        }]
    }
    const chartConfig = {
        backgroundGradientFrom: 'white',
        backgroundGradientTo: 'white',
        color: (opacity = 1) => styleColors.primary,
    }

    return (
        <View>
            <BarChart
                // style={chartConfig}
                data={data}
                width={Dimensions.get('window').width}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 30,
//         // backgroundColor: "green"
//     },
//     text: {
//         alignItems: "center",
//     },
//     bar: {
//         height: 25,
//     }
// });


export default LastSpendingsChart;


