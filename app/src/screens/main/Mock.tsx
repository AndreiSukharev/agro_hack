import React from 'react';
import {Text} from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "../styles";

const Mock: React.FC<any> = () => {

    return (
        <SafeAreaView style={styles.container}>
                <Text>Mock</Text>
        </SafeAreaView>
    )
}


export default Mock;
