import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {NavigationAuthProps, EnumAuthRoutes} from "../../types/routes-type/routes-auth-types";
import {connect} from "react-redux";
import {RootStateType} from "../../stores/redux";
import {loginUser} from "../../stores/redux/system/action";
import {ISystemState} from "../../stores/redux/system/types";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import DismissKeyboardWrapper from "../../components/DismissKeyboardWrapper";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import {Image} from "react-native";

type NavigationType = NavigationAuthProps<EnumAuthRoutes.login>;
type Props = NavigationType & LinkStateProps & LinkDispatchProps;

//export default class Friends extends Component {
const Login: React.FC<Props> = ({navigation, isLogged, loginReducer}) => {
    const [userEmail, setEmail] = useState<string>("");
    const [userPassword, setPassword] = useState<string>("");

    const checkUserInput = (): boolean => {
        const email = userEmail.trim();
        const password = userPassword.trim();
        // todo: check input validate.js
        setEmail(email);
        setPassword(password);
        return true;
    };

    const handleEmailInput = (value: string) => {
        setEmail(value);
    }
    const handlePasswordInput = (value: string) => {
        setPassword(value);
    }

    // const authorise = async () => {
    //     const userData : IUserLogin = {
    //         login: userLogin,
    //         password: userPassword,
    //     }
    //     loginUser(userData)
    // }
    const sendUserInput = async () => {
        // todo: sync with storage
        if (!checkUserInput()) {
            return;
        }
        try {
            // await authorise()
            const user = {_id: "0"};
            loginReducer({loggedUserId: user._id, isLogged: true});
        } catch (e) {
            alert("error login");
        }
    };

    return (
        <DismissKeyboardWrapper>

            <SafeAreaView style={styles.container}>
                <Image
                    style={{width: 120, height: 120, alignSelf: 'center'}}
                    source={{uri: "https://op-lab.fi/wp-content/uploads/2015/11/cropped-op_logo.png"}}
                />
                <EmailInput handleEmailInput={handleEmailInput}/>
                <PasswordInput handlePasswordInput={handlePasswordInput}/>

                <Button mode="contained" onPress={sendUserInput}>Login</Button>

                <Button onPress={() => navigation.navigate(EnumAuthRoutes.signUp)}>or Create an Account</Button>
                <Button onPress={() => navigation.navigate(EnumAuthRoutes.forgottenPassword)}>Forgot Password?</Button>
            </SafeAreaView>
        </DismissKeyboardWrapper>
    )
}

interface LinkStateProps {
    isLogged: boolean,
}

const mapStateToProps = (state: RootStateType, ownProps: NavigationType) => ({
    navigation: ownProps.navigation,
    isLogged: state.system!.isLogged,
});

interface LinkDispatchProps {
    loginReducer: (user: ISystemState) => void,
}

const mapDispatchToProps = (dispatch: any) => ({
    loginReducer: (user: ISystemState) => dispatch(loginUser(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
