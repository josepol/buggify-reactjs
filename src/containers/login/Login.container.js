import React from 'react'
import { connect } from 'react-redux'
import { loginProvider } from './providers/login.provider'

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

    login(e) {
        e.preventDefault();
        this.props.login({
            username: 'username', password: 'password'
        });
    }

    render() {
        return (
            <React.Fragment>
                <p>Login</p>
                <button onClick={(e) => this.login(e)}>Login</button>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)