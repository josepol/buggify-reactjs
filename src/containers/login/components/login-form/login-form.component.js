import React from 'react'
import {reduxForm, Field} from 'redux-form'

const validate = values => {
    const errors = {}
    if (!values.username)  {
        errors.username = 'username is required'
    }
    if (!values.password)  {
        errors.password = 'password is required'
    }
    return errors;
}

const warn = values => {
    const warns = {}
    if (values.password && values.password.length < 3) {
        warns.password = 'password length is less than 3 characters'
    }
    return warns;
}

const LoginInputComponent = ({input, type, meta: {touched, submitFailed, error, warning}}) => {
    return (
        <React.Fragment>
            <input type={type} {...input} />
            <p>{submitFailed && error && <span>{error}</span>}</p>
            <p>{submitFailed && warning && <span>{warning}</span>}</p>
        </React.Fragment>
    )
}

const LoginFormComponent = props => {
    const { handleSubmit, onSubmit, isRegister } = props
    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Field name="username" component={LoginInputComponent} type="text" />
            <Field name="password" component={LoginInputComponent} type="password" />
            {<button type="submit">{isRegister ? 'Register' : 'Login'}</button>}
        </form>
    )
};

export default reduxForm({
    form: 'login-form',
    validate,
    warn
})(LoginFormComponent)

