import React from "react";
import {Provider} from "react-redux";
import {Provider as PaperProvider} from 'react-native-paper';
import {configureStore} from "../stores/redux";
import {theme} from "./theme";

const store = configureStore();
const ProviderList: React.FC<any> = ({children}) => {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                {children}
            </PaperProvider>
        </Provider>
    );
};


export default ProviderList;
