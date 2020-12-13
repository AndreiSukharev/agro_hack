import {IUser} from "./user-types";

export enum EnumMessageStage {
    argument= "argument",
    rebuttal = "rebuttal",
}

export interface IMessage {
    _id: string,
    chatId?: string,
    user: IUser,
    stage?: EnumMessageStage,
    text: string,
    createdAt: Date,
    system: boolean,
}

export interface IStateMessages {
    inputText: string,
    loading: boolean,
    message?: IMessage,
    messages: IMessage[],
    disabledBtn: boolean,
}
