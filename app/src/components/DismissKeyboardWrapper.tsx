import React from "react";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const DismissKeyboardWrapper: React.FC<any> = ({children}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
}
export default DismissKeyboardWrapper;
