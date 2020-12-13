import * as React from "react";
import {Bubble, Time, SystemMessage} from "react-native-gifted-chat";
import {styleColors} from "../../../styles";
import {chatStyle} from "./chatStyle";
import {ActivityIndicator} from "react-native-paper";
import {View} from "react-native";

export const renderBubble = props => {
    return (
        <Bubble
            {...props}
            wrapperStyle={
                {
                    right: {
                        backgroundColor: styleColors.primary,
                    },
                    left: {
                        backgroundColor: "silver",
                    }
                }
            }
        />
    )
};

export const renderTime = (props) => {
    return (
        <Time
            {...props}
            timeTextStyle={{
                left: {
                    color: "black",
                },
            }}
        />
    );
};

export const renderSystemMessage = props => {
    return (
        <SystemMessage
            {...props}
            textStyle={{
                color: "black",
                size: 2,
        }}
        />
    );
};

export const renderLoading = () => {
    return (
        <View style={chatStyle.loadingContainer}>
            <ActivityIndicator size='large' color={styleColors.primary} />
        </View>
    );
}
