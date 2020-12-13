import * as React from "react";
import {ChatIndexStack, EnumChatRoutes} from "../types/routes-type/routes-chat-types";
import {navigationColours} from "../styles";
import Chat from "../screens/main/chat/Chat";

const RoutesChat: React.FC<any> = ({}) => {
    return (
            <ChatIndexStack.Navigator
                initialRouteName={EnumChatRoutes.support}
                screenOptions={navigationColours}
            >
                <ChatIndexStack.Screen name='Поддержка' component={Chat}/>
            </ChatIndexStack.Navigator>
    )
};

export default RoutesChat;
