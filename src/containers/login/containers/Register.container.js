import React from 'react'
import {connect} from 'react-redux'
import {registerProvider} from '../providers/login.provider'
import LoginFormComponent from '../components/login-form/login-form.component';

const mapStateToProps = (state, props) => {
    const loginReducer = state.LoginReducer
    return {
        registerStatus: loginReducer.status
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        register: (loginData) => dispatch(registerProvider(loginData))
    }
}

class RegisterContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            status: false
        }
        this.register = this.register.bind(this)
    }

    componentDidUpdate(prevProps, nextState) {
        if (this.props.registerStatus) {
            console.log('registered');
        } else {
            console.log('not registered')
        }
    }

    register(registerValues) {
        this.props.register(registerValues);
    }

    render() {
        return <LoginFormComponent isRegister={true} onSubmit={this.register} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)