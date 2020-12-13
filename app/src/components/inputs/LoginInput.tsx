import React, {useState} from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {styles} from "./styles";
import {View} from "react-native";
import {hasLoginError} from "./InputValidation";

const LoginInput: React.FC<any> = ({handleLoginInput}) => {
    const [login, setLogin] = useState<string>("");

    const hasErrors = () : boolean => {
        return hasLoginError(login);
    };

    const onChangeInput = (newValue: string) => {
        setLogin(newValue);
        handleLoginInput(newValue);
    }

    return (
        <View>
            <TextInput
                label="Login"
                style={styles.input}
                mode="outlined"
                onChangeText={onChangeInput}
                textContentType="username"
                placeholder="debater3000"
            />
            <HelperText type="error" visible={hasErrors()}>
                Минимум 5 символов
            </HelperText>
        </View>
    )
}

export default LoginInput;
