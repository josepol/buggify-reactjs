import React from 'react'
import {connect} from 'react-redux'
import {registerProvider} from '../providers/login.provider'
import {RegisterFormComponent} from '../components/login-form/login-form.component'
import * as Toastr from 'toastr'

const mapStateToProps = (state, props) => {
    return {
        registerStatus: state.LoginReducer.status,
        random: state.LoginReducer.random
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

    componentDidUpdate(prevProps, prevState) {
        if (this.props.registerStatus) {
            Toastr.success('User registered successfully')
            this.props.history.push('/login')
        } else {
            Toastr.error('User registered error')
        }
    }

    register(registerValues) {
        this.props.register(registerValues);
    }

    render() {
        return <RegisterFormComponent isRegister={true} onSubmit={this.register} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)