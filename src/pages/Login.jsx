import React from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from './../components/StyledTextInput.jsx'
import StyleText from "../components/StyleText.jsx";


const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error:{
        color: 'red'
    },
    form: {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <>
        <StyledTextInput
              value={field.value}
              onChangeText={value => helpers.setValue(value)}
              {...props}
            />
            {meta.error && <StyleText style={styles.error}>{meta.error}</StyleText>}
            </>
    )
}

const validate = values => {
    const errors = {}
    if (!values.email){
        errors.email = 'email is required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9 -]+\.[A-Z]{2,4}$/i.text(values.email)){
        errors.email = 'Invalid email address'
    }
}

export default function LoginPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder="Email"
              placeholderTextColor='red'
            />
            <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login">
              Login
            </Button>
          </View>
        )
      }}
    </Formik>
  );
} 