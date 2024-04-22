import React from "react";
import { StyleSheet, View } from "react-native";
import StyleText from "./StyleText";
import Constants from 'expo-constants'
import { theme } from "../theme";


const styles = StyleSheet.create({
    constainer: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

const AppBar = () => {
    return (
        <View style={styles.constainer}>
            <StyleText fontWeight='bold' style={styles.text}>Repositories</StyleText>
        </View>
    )
}

export default AppBar
