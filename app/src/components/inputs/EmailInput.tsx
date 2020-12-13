import React, {useState} from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {styles} from "./styles";
import {View} from "react-native";
import {hasEmailError} from "./InputValidation";

const EmailInput: React.FC<any> = ({handleEmailInput}) => {
    const [email, setEmail] = useState<string>("");
    const hasErrors = () : boolean => {
        return hasEmailError(email);
    };
    const onChangeInput = (newValue: string) => {
        setEmail(newValue);
        handleEmailInput(newValue);
    }
    return (
        <View>
            <TextInput
                label="Email"
                style={styles.input}
                mode="outlined"
                keyboardType="email-address"
                onChangeText={onChangeInput}
                textContentType="emailAddress"
                placeholder="deb@debate.com"
            />
            <HelperText type="error" visible={hasErrors()}>
                Not valid email
            </HelperText>
        </View>
    )
}

export default EmailInput;
