import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { Grid, Row, Col } from 'react-bootstrap'

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

const LoginInputComponent = ({input, type, placeholder, meta: {touched, submitFailed, error, warning}}) => {
    return (
        <React.Fragment>
            <input type={type} {...input} placeholder={placeholder} />
            <p>{submitFailed && error && <span>{error}</span>}</p>
            <p>{submitFailed && warning && <span>{warning}</span>}</p>
        </React.Fragment>
    )
}

const LoginFormComponent = props => {
    const { handleSubmit, onSubmit, isRegister } = props
    return (
        <React.Fragment>
        <Grid className="loginFormComponent container">
            <Row>
                <Col md={4} className="left-container">
                    <h1 className="text-center">{isRegister ? 'Register' : 'Login'}</h1>
                </Col>
                <Col md={8}>
                    <form className="login-form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                        <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                                <Field name="username" placeholder="Username" component={LoginInputComponent} type="text" />
                                <Field name="password" placeholder="Password" component={LoginInputComponent} type="password" />
                                {<button type="submit">{isRegister ? 'Sign up' : 'Sign in'}</button>}
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Grid>
        </React.Fragment>
    )
};

export default reduxForm({
    form: 'login-form',
    validate,
    warn
})(LoginFormComponent)

