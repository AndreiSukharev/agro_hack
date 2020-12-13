import React from 'react';
import {Card} from "react-native-paper";
import {StyleSheet} from 'react-native';
import {IPost} from "../../../types/post-type";

type Props = IPost;
const Post: React.FC<Props> = ({title, description, link}) => {

    return (
            <Card style={styles.card}>
                <Card.Title
                    title={title}
                    subtitle={description}
                />
                <Card.Cover source={{uri: link}}/>
            </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
    },
});

export default Post;
