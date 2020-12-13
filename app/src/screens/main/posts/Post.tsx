import React from 'react';
import {Card, Paragraph, Title} from "react-native-paper";
import {EnumPostRoutes, NavigationPostProps} from "../../../types/routes-type/routes-post-types";

type Props = NavigationPostProps<EnumPostRoutes.post>

const Post: React.FC<Props> = ({route}) => {

    return (
            <Card>
                <Card.Content>
                    <Title>{route.params.title}</Title>
                    <Paragraph> {route.params.description} </Paragraph>
                </Card.Content>
                <Card.Cover source={{uri: route.params.link}}/>
            </Card>
    )
}


export default Post;
