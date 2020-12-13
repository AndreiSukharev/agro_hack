import React, {Component} from 'react';
import {styles} from "../../styles";
import {SafeAreaView} from "react-native";
import {TextInput, Switch, Text, Button, Snackbar} from "react-native-paper";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";
import {styleColors} from "../../../styles";

type State = {
    name: string,
    birth: string,
    phone: string,
    email: string,
    isAgree: boolean,
    visible: boolean,
}

export default class CreditStage1 extends Component<{}, State> {

    state: State = {
        name: '',
        birth: '',
        phone: '',
        email: '',
        isAgree: false,
        visible: false,
    }

    send = () => {
        this.setState({visible: true});
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <DismissKeyboardWrapper>
                    <ScrollView>
                        <TextInput
                            label="Имя"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({name: value})}
                            placeholder="Олег Петров Петрович"
                        />
                        <TextInput
                            label="Мобильный телефон"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({phone: value})}
                            placeholder="8950448900"
                        />
                        <TextInput
                            label="Электронная почта"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({email: value})}
                            placeholder="hack@sample.com"
                        />
                        <TextInput
                            multiline={true}
                            label="Вопрос"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({birth: value})}
                            placeholder=""
                        />
                        <Switch value={this.state.isAgree}
                                onValueChange={(value) => this.setState({isAgree: value})}/>
                        <Text>Я соглашаюсь с условиями обработки и использования моих
                            персональных данных. Подробнее
                        </Text>
                        <Button style={{marginTop: 10}} onPress={this.send} mode="contained">Отправить</Button>

                    </ScrollView>
                </DismissKeyboardWrapper>
                <Snackbar
                    theme={{colors: {onSurface: styleColors.success}}}
                    visible={this.state.visible}
                    onDismiss={() => this.setState({visible: false})}>
                    Заявка отправлена!
                </Snackbar>
            </SafeAreaView>

        );
    }
}
