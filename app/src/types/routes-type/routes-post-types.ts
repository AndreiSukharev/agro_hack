import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";
import {IPost} from "../post-type";

export enum EnumPostRoutes {
    posts = "Posts",
    post = "Post",
}

type PostStackParamList = {
    Posts: undefined;
    Post: IPost;
};

export const PostStack = createStackNavigator<PostStackParamList>();

export type NavigationPostProps<T extends keyof PostStackParamList> = StackScreenProps<PostStackParamList, T>;

