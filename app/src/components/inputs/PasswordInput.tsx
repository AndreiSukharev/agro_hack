import React, {useState} from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {styles} from "./styles";
import {View} from "react-native";
import {hasPasswordError} from "./InputValidation";

const PasswordInput: React.FC<any> = ({handlePasswordInput}) => {
    const [password, setPassword] = useState<string>("");

    const hasErrors = (): boolean => {
        return hasPasswordError(password);
    };

    const onChangeInput = (newValue: string) => {
        setPassword(newValue);
        handlePasswordInput(newValue);
    }

    return (
        <View>
            <TextInput
                label="Password"
                style={styles.input}
                mode="outlined"
                onChangeText={onChangeInput}
                textContentType="password"
                secureTextEntry={true}
            />
            <HelperText type="error" visible={hasErrors()}>
                Password must be at least 5 characters
            </HelperText>
        </View>
    )
}

export default PasswordInput;
