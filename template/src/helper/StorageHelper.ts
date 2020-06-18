import {AsyncStorage} from "react-native";

export const getData = async (key: string) => {
    const data = await AsyncStorage.getItem(key);
    if (typeof data === 'string') {
        return JSON.parse(data);
    }
    return data;
};

export const storeData = async (key: string, value: any) => {
    let valueStr = value;
    if (typeof valueStr === 'object') {
        valueStr = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, valueStr);
};

export const clearAppStorage = async () => {
    try {
        await AsyncStorage.clear();
        return true
    } catch (e) {
        return false
    }
};
