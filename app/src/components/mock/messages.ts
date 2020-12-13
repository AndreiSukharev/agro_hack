import {EnumMessageStage, IMessage} from "../../types/chat-types";
import {users} from "./users";

export const messages: IMessage[] = [


    // {
    //     _id: "9",
    //     chatId: "1",
    //     user: users[0],
    //     stage: EnumMessageStage.rebuttal,
    //     text: "фыв",
    //     createdAt: new Date(2020, 9, 10, 11, 2),
    //     system: false,
    // },
    //
    // {
    //     _id: "6",
    //     chatId: "1",
    //     user: users[1],
    //     stage: EnumMessageStage.rebuttal,
    //     text: "С дальнейшими шагами, вы можете ознакомиться в статье \"Как получить автокредит\"",
    //     createdAt: new Date(2020, 9, 10, 11, 3),
    //     system: false,
    // },
    //
    // {
    //     _id: "3",
    //     chatId: "1",
    //     user: users[0],
    //     stage: EnumMessageStage.argument,
    //     text: "Спасибо. Да. Что мне делать дальше?",
    //     createdAt: new Date(2020, 9, 10, 11, 0),
    //     system: false,
    // },
    {
        _id: "0",
        chatId: "1",
        user: users[1],
        stage: EnumMessageStage.argument,
        text: "Здравствуйте, я ваш помощник.\n" +
            "Чем могу помочь?",
        createdAt: new Date(),
        system: false,
    },

    // {
    //     _id: "1",
    //     text: 'Сделайте заказ',
    //     createdAt: new Date(2020, 9, 10, 11, 7),
    //     user: users[1],
    //     system: true,
    // },
];

export const messageMock: IMessage = {
    _id: "3",
    chatId: "1",
    user: users[1],
    stage: EnumMessageStage.argument,
    text: "Спасибо. Да. Что мне делать дальше?",
    createdAt: new Date(),
    system: false,
}

