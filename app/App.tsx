import React from 'react';
import Routes from "./src/routes/index"
import ProviderList from "./src/providers/ProviderList";
import {SafeAreaProvider} from "react-native-safe-area-context";
const App: React.FC<any> = () => {

    return (
        <SafeAreaProvider>
            <ProviderList>
                <Routes/>
            </ProviderList>
        </SafeAreaProvider>
    );
}


export default App;

