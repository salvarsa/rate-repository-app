import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import StyledTextInput from './../components/StyledTextInput.jsx'


const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

const FormikImputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput
              value={field.value}
              onChangeText={value => helpers.setValue(value)}
              {...props}
            />
    )
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
            <FormikImputValue
              name='email'
              placeholder="Email"
            />
            <FormikImputValue
              name='password'
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login">
              Login
            </Button>
          </View>
        );
      }}
    </Formik>
  );
} 