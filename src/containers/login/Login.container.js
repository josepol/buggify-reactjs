import React from 'react'
import {connect} from 'react-redux'
import {loginProvider} from './providers/login.provider'
import LoginFormComponent from './components/login-form/login-form.component';

const mapStateToProps = (state, props) => {
    return {

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

    login(loginValues) {
        this.props.login(loginValues);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <LoginFormComponent onSubmit={this.login} />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)