import React from "react";
import { Text, TextInput, View, Button } from "react-native";
import { Formik } from "formik";
import StyledTextInput from './../components/StyledTextInput.jsx'


const initialValues = {
    email: '',
    password: ''
}

export default function LoginPage () {
    return <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({handleChange, handleSubmit, values}) => {
            return (
                <View>
                <StyledTextInput placeholder="Email" value={values.email} onChange={handleChange('email')}/>
                <StyledTextInput placeholder="Password" value={values.password} onChange={handleChange('password')}/>
                <Button onPress={handleSubmit} title="Login">Login</Button>
            </View>
            )
        }}
    </Formik>
} 