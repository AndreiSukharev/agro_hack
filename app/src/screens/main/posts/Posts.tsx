import React, {Component} from 'react';
import {IPost} from "../../../types/post-type";
import {FlatList, TouchableWithoutFeedback} from "react-native-gesture-handler";
import PostItem from "./PostItem";
import {EnumPostRoutes, NavigationPostProps} from "../../../types/routes-type/routes-post-types";
import {posts} from "../../../components/mock/posts";

type Props = NavigationPostProps<EnumPostRoutes.posts>

export default class Posts extends Component<Props> {

    toPost = (item: IPost) => {
        this.props.navigation.navigate(EnumPostRoutes.post, {...item});
    }

    render() {
        return (
            <FlatList
                data={posts}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => this.toPost(item)}>
                        <PostItem key={item.title} {...item} />
                    </TouchableWithoutFeedback>
                )}
            />
        );
    }
}
