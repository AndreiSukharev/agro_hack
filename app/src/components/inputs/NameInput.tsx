import React, {useState} from 'react';
import {HelperText, TextInput} from "react-native-paper";
import {styles} from "./styles";
import {View} from "react-native";
import {hasLoginError} from "./InputValidation";

const NameInput: React.FC<any> = ({handleNameInput}) => {
    const [name, setName] = useState<string>("");

    const hasErrors = () : boolean => {
        return hasLoginError(name);
    };

    const onChangeInput = (newValue: string) => {
        setName(newValue);
        handleNameInput(newValue);
    }

    return (
        <View>
            <TextInput
                label="Name"
                style={styles.input}
                mode="outlined"
                onChangeText={onChangeInput}
                placeholder="John Doe"
            />
            <HelperText type="error" visible={hasErrors()}>
                Name must be at least 3 characters
            </HelperText>
        </View>
    )
}

export default NameInput;
