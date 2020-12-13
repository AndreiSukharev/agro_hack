import {View} from "react-native";
import React from "react";
import SearchInput from "../inputs/SearchInput";
import {ActivityIndicator} from "react-native-paper";

export const renderSeparator = () => {
    return (
        <View
            style={{
                height: 1,
                backgroundColor: "#CED0CE",
                marginLeft: "20%"
            }}
        />
    );
};

export const renderHeader = (handleQuery) => {
    return <SearchInput handleQuery={handleQuery}/>;
};

export const renderFooter = (loading: boolean) => {
    if (!loading) return null;
    return (
        <ActivityIndicator animating/>
    );
}
