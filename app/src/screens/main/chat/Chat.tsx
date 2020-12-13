import * as React from 'react';
import {IMessage, IStateMessages} from "../../../types/chat-types";
import {GiftedChat, Send} from 'react-native-gifted-chat'
import {styles} from "../../styles";
import {messages, messageMock} from "../../../components/mock/messages";
import {RootStateType} from "../../../stores/redux";
import {connect} from "react-redux";
import {renderBubble, renderLoading, renderSystemMessage, renderTime} from "./GiftChatRender";
import {Avatar} from "react-native-paper";
import {chatStyle} from "./chatStyle";
import {SafeAreaView} from "react-native-safe-area-context";
//
// function getRandomInt() {
//     const min = 2;
//     const max = 2000;
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

const analyzer = {
    'яблоня': 'Род листопадных деревьев и кустарников семейства Розовые (Rosaceae) с шаровидными сладкими или кисло-сладкими плодами. Происходит из зон умеренного климата Северного полушария.',
    'болезней': 'Мучнистая роса, парша, монилиоз, ржавчина и другие'
}

class Chat extends React.Component<any> {

    state: IStateMessages = {
        loading: false,
        inputText: "",
        messages: messages,
        disabledBtn: false,
    }

    renderSend = (props) => {
        return (
            <Send
                {...props}
                disabled={this.state.disabledBtn}
                containerStyle={chatStyle.sendingContainer}
            >
                <Avatar.Icon icon='send' size={32}/>
            </Send>
        );
    };

    analyzeMessage = (text : string) => {
        // const words : string[] = text.toLowerCase().split(' ');
        // let isFound = false;
        const newMessage : IMessage = {
            ...messageMock,
            createdAt: new Date(),
            _id: String(this.state.messages.length + 1),
        }
        // words.forEach(word => {
        //     if (analyzer[word]) {
        //         newMessage.text = analyzer[word];
        //         isFound = true;
        //     }
        // });
        // if (!isFound) {
            newMessage.text = "Спасибо, ваш вопрос отправлен.\nСкоро мы вам овтетим";
        // }
        const newMessages = GiftedChat.append(this.state.messages, [newMessage]);
        this.setState({messages: newMessages});
    }

    onSend = (messages: IMessage[] = []) => {
        const newMessages = GiftedChat.append(this.state.messages, messages);
        this.setState({messages: newMessages});
        setTimeout(() => this.analyzeMessage(messages[0].text), 1000);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{_id: this.props.loggedUserId}}
                    alwaysShowSend
                    renderSend={this.renderSend}
                    renderBubble={renderBubble}
                    renderTime={renderTime}
                    renderSystemMessage={renderSystemMessage}
                    renderLoading={renderLoading}
                    placeholder="Message"
                />
            </SafeAreaView>

        );
    }
}

const mapStateToProps = (state: RootStateType, ownProps) => {
    return ({
        loggedUserId: state.system!.loggedUserId,
        ...ownProps,
    })
}

export default connect(mapStateToProps)(Chat);
