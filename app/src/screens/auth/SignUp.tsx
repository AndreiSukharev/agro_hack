import React, {useState} from 'react';
import {NavigationAuthProps, EnumAuthRoutes} from "../../types/routes-type/routes-auth-types";
import {Button} from "react-native-paper";
import DismissKeyboardWrapper from "../../components/DismissKeyboardWrapper";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import EmailInput from "../../components/inputs/EmailInput";
import LoginInput from "../../components/inputs/LoginInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import NameInput from "../../components/inputs/NameInput";
import {ScrollView} from "react-native-gesture-handler";

const SignUp: React.FC<NavigationAuthProps<EnumAuthRoutes.signUp>> = ({navigation}) => {
    const [userEmail, setEmail] = useState<string>("");
    const [userLogin, setLogin] = useState<string>("");
    const [userName, setName] = useState<string>("");
    const [userPassword, setPassword] = useState<string>("");

    const signUp = async () => {
        return;
    };

    const handleEmailInput = (value: string) => {
        setEmail(value);
    }
    // const handleLoginInput = (value: string) => {
    //     setLogin(value);
    // }
    const handleNameInput = (value: string) => {
        setName(value);
    }
    const handlePasswordInput = (value: string) => {
        setPassword(value);
    }

    return (
        <ScrollView>
            <DismissKeyboardWrapper>
                <SafeAreaView style={styles.container}>
                    <EmailInput handleEmailInput={handleEmailInput}/>
                    {/*<LoginInput handleLoginInput={handleLoginInput}/>*/}
                    <NameInput handleNameInput={handleNameInput}/>
                    <PasswordInput handlePasswordInput={handlePasswordInput}/>
                    <Button mode="contained" onPress={signUp}>Sign Up</Button>
                </SafeAreaView>
            </DismissKeyboardWrapper>
        </ScrollView>
    );
}

export default SignUp;

