import {AsyncStorage} from "react-native";
// import {ISystemState} from "../types/logged-user";
import {ISystemState} from "../stores/redux/system/types";

class LocalAsyncStorage {

    private readonly STORAGE_KEY = '@save_logged_user';

    async saveLoggingUser() : Promise<void> {
        const loggingUser: ISystemState = {isLogged: true};
        try {
            await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(loggingUser));
            console.log('Data successfully saved');
        } catch (e) {
            console.log('Failed to save the data to the storage');
        }
    };

    async getLoggedUser(): Promise<ISystemState | undefined> {
        try {
            const ISystemState = await AsyncStorage.getItem(this.STORAGE_KEY);
            console.log(ISystemState);
            return JSON.parse(<string>ISystemState) as ISystemState
        } catch (e) {
            console.log('Failed to fetch the data from storage');
            return;
        }
    }

    async clearLoggedUser() : Promise<void> {
        try {
            await AsyncStorage.removeItem(this.STORAGE_KEY);
            console.log('Storage successfully cleared!')
        } catch (e) {
            console.log('Failed to clear the async storage.')
        }
    };
}
const localAsyncStorage = new LocalAsyncStorage()
export default localAsyncStorage;
