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

    componentWillReceiveProps(newProps) {
        this.setState({
            status: newProps.registerStatus
        });
    }

    componentDidUpdate(prevProps, nextState) {
        if (this.state.status) {
            console.log('register bb-bi-biatch');
        } else {
            console.log('not logged yo bbiatch')
        }
    }

    register(registerValues) {
        this.props.register(registerValues);
    }

    render() {
        return (
            <React.Fragment>
                <h1>Register</h1>
                <LoginFormComponent isRegister={true} onSubmit={this.register} />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)