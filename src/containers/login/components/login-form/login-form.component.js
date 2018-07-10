import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import {InputComponent} from '../../../../components/common/form-inputs/form-inputs.component'

import './login-form.component.scss'

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

const loginFormComponent = props => {
    const { handleSubmit, onSubmit, isRegister } = props
    return (
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
                                <Field name="username" placeholder="Username" component={InputComponent} type="text" />
                                <Field name="password" placeholder="Password" component={InputComponent} type="password" />
                                {<button type="submit">{isRegister ? 'Sign up' : 'Sign in'}</button>}
                                <Link className="login-link" to={!isRegister ? '/register' : '/login'}>{!isRegister ? 'Sign up' : 'Sign in'}</Link>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Grid>
    )
};

export const LoginFormComponent = reduxForm({
    form: 'login-form',
    validate,
    warn
})(loginFormComponent)

export const RegisterFormComponent = reduxForm({
    form: 'register-form',
    validate,
    warn
})(loginFormComponent)

