import React from 'react'
import {connect} from 'react-redux'
import {loginProvider} from '../providers/login.provider'
import {LoginFormComponent} from '../components/login-form/login-form.component';
import * as Toastr from 'toastr'

const mapStateToProps = (state, props) => {
    return {
        loginStatus: state.LoginReducer.token
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: (loginData) => dispatch(loginProvider(loginData))
    }
}

class LoginContainer extends React.Component {

    constructor() {
        super()
        this.login = this.login.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.loginStatus) {
            this.props.history.push('/')
        } else {
            Toastr.error('Username or password invalid')
        }
    }

    login(loginValues) {
        this.props.login(loginValues)
    }

    render() {
        return <LoginFormComponent onSubmit={this.login} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)