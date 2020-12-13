import React, {useState} from 'react';
import {NavigationAuthProps, EnumAuthRoutes} from "../../types/routes-type/routes-auth-types";
import {Button} from "react-native-paper";
import {SafeAreaView} from "react-native-safe-area-context";
import DismissKeyboardWrapper from "../../components/DismissKeyboardWrapper";
import {styles} from "./styles";
import EmailInput from "../../components/inputs/EmailInput";
import {hasEmailError} from "../../components/inputs/InputValidation";

const ForgottenPassword: React.FC<NavigationAuthProps<EnumAuthRoutes.signUp>> = ({navigation}) => {
    const [email, setEmail] = useState<string>("");

    const reset = async () => {
        if (hasEmailError(email)) {
            return ;
        }
        return;
    };

    const handleEmailInput = (value: string) => {
        setEmail(value);
    }

    return (
        <DismissKeyboardWrapper>

            <SafeAreaView style={styles.container}>
                <EmailInput handleEmailInput={handleEmailInput}/>
                <Button mode="contained" onPress={reset}>Сбросить</Button>
            </SafeAreaView>
        </DismissKeyboardWrapper>
    );
}

export default ForgottenPassword;

