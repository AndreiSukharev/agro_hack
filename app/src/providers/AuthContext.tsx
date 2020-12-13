// import React from "react";
// import {ISystemState} from "../stores/redux/types/system-types";
// import localAsyncStorage from "../services/AsyncStorage";
//
//
// export const AuthContext = React.createContext<{
//     login: () => {},
//     getLoggedUser: () => Promise<ISystemState | undefined>,
//     logout: () => Promise<void>,
//
// }>({
//     login(): {} {
//         return Promise.resolve(undefined);
//     },
//     getLoggedUser(): Promise<ISystemState | undefined> {
//         return Promise.resolve(undefined);
//     },
//     logout(): Promise<void> {
//         return Promise.resolve(undefined);
//     },
// });
//
//
// export const AuthProvider: React.FC<any> = ({children}) => {
//
//     return (
//         <AuthContext.Provider
//             value={{
//                 login: () => localAsyncStorage.saveLoggingUser(),
//                 getLoggedUser: () => localAsyncStorage.getLoggedUser(),
//                 logout: () => localAsyncStorage.clearLoggedUser(),
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }
//
