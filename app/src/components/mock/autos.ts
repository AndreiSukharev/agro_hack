import {EnumMessageStage, IMessage} from "../../types/chat-types";


export const autos = [

    {
        title: "Как получить автокредит",
        description: "Краткая инструкция для того, чтобы получить моментальное одобрение по автокредиту.",
        link: "data:image/png;base64,
    },

    {
        _id: "3",
        chatId: "1",
        user: users[0],
        stage: EnumMessageStage.argument,
        text: "Спасибо. Да. Что мне делать дальше?",
        createdAt: new Date(2020, 9, 10, 11, 0),
        system: false,
    },
    {
        _id: "2",
        chatId: "1",
        user: users[1],
        stage: EnumMessageStage.argument,
        text: "Ваша заявка на автокредит одобрена!\n" +
            "Для дальнейших действий, вам необходимо подписать договор.\n" +
            "Вы можете сделать это в разделе \"Заявки на кредит\"\n" +
            "А также лично, посетив отделение банка.\n" +
            "У вас остались вопросы?",
        createdAt: new Date(2020, 9, 10, 11, 1),
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

// export const messageMock: IMessage = {
//     _id: "11",
//     text: "фыв",
//     createdAt: new Date(2020, 7, 23, 11, 8),
//     user: users[1],
//     system: false,
// }

