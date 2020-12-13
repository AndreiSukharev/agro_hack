import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Card, Text, Button, ActivityIndicator, Title, Paragraph} from "react-native-paper";
import {Camera} from 'expo-camera';
import {styles} from "../../styles";
// import * as ImageManipulator from "expo-image-manipulator";
import {EnumMainRoutes} from "../../../types/routes-type/routes-main-types";

const SICK = 'Болен';
const NOT_SICK = 'Не болен';

type Photo = {
    uri?: string,
    height?: string,
    width?: string,
    base64?: string,
}

export default function CameraSnapshot({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [photo, setPhoto] = useState<Photo>(undefined);
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const takePicture = async () => {
        if (!cameraRef) {
            return;
        }
        setLoading(true);
        try {
            const data : Photo = await cameraRef.takePictureAsync();
            // const compressedPhoto = await compress(data.uri);
            // const res = await carRecognition(compressedPhoto.base64);
            setLoading(false);
            if (data) {
                setPhoto(data);
                setResult(SICK)
            }
        } catch (e) {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    if (loading) {
        return (
            <View style={styles.containerCenter}>
                <ActivityIndicator animating={true}/>
            </View>
        )
    }
    if (photo) {
        return (
            <SafeAreaView style={styles.container}>
                <Card>
                    <Card.Title title={`Результат: ${result}`}/>
                    <Card.Cover style={{height: 350, width: '100%'}} source={{uri: photo.uri}}/>
                    <Card.Content>
                        <Title>Филлокситоз</Title>
                        <Paragraph>Этому грибковому заболеванию яблони благоприятствует теплое и очень дождливое лето. На листочках сначала начинают появляться круглые бурые пятнышки, которые имеют коричневые края. Они быстро распространяются. Стоит заметить, что даже в случае, когда сами плоды на их фоне выглядят здоровыми, они теряют вкусовые качества и витамины, становятся менее полезными.</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => navigation.navigate(EnumMainRoutes.consultation)}>Заявка на консультацию</Button>
                        <Button onPress={() => setPhoto(undefined)}>Отмена</Button>
                    </Card.Actions>
                </Card>
            </SafeAreaView>
        )
    }
    return (
        <View style={{flex: 1}}>
            <Camera
                style={{flex: 1}}
                ref={ref => {
                    setCameraRef(ref)
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'flex-end'
                    }}>
                    <TouchableOpacity style={{alignSelf: 'center'}} onPress={async () => takePicture()}>
                        <View style={{
                            borderWidth: 2,
                            borderRadius: "50%",
                            borderColor: 'white',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        >
                            <View style={{
                                borderWidth: 2,
                                borderRadius: "50%",
                                borderColor: 'white',
                                height: 40,
                                width: 40,
                                backgroundColor: 'white'
                            }}>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
