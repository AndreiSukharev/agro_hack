import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {EnumMainRoutes} from "../types/routes-type/routes-main-types";
import {StyleSheet} from "react-native";
import {MainStack} from "../types/routes-type/routes-main-types";
import RoutesPost from "./RoutesPost";
import RoutesProfileIndex from "./RoutesProfileIndex";
import RoutesChat from "./RouteeChat";
import {styleColors} from "../styles";
import CameraSnapshot from "../screens/main/CameraSnapshot/CameraSnapshot";
import RoutesScenarioIndex from "./RoutesScenarioIndex";

const RoutesMain: React.FC<any> = () => {
    return (
        <MainStack.Navigator
            initialRouteName={EnumMainRoutes.posts}
            activeColor="white"
            barStyle={styles.tabs}
        >
            <MainStack.Screen
                name={EnumMainRoutes.posts}
                component={RoutesPost}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.photo}
                component={CameraSnapshot}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="leaf" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.chat}
                component={RoutesChat}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.consultation}
                component={RoutesScenarioIndex}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="mail" color={color} size={26} />
                    ),
                }}
            />

        </MainStack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabs: {
        backgroundColor: styleColors.primary,
    }
});

export default RoutesMain;
