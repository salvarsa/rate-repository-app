import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, ScrollView  } from "react-native";
import StyleText from "./StyleText";
import Constants from 'expo-constants'
import { theme } from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()

    const active = pathname === to

    const textStyles = [
        styles.text,
        active && styles.active
    ]
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyleText fontWeight='bold' style={textStyles}>
                {children}
            </StyleText>
        </Link>
    )
}


const AppBar = () => {
    
    return (
        <View style={styles.constainer}>
            <ScrollView horizontal style={styles.scroll}>
            <AppBarTab  to='/'>Repositories</AppBarTab>
            <AppBarTab  to='/signIn'>Sing In</AppBarTab>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
    },
    scroll: {
        paddingBottom: 15
    },
    text: {
        color: theme.colors.textSecondary,
        paddingHorizontal: 10
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})


export default AppBar
