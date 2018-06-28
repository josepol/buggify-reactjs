import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import AddBugForm from './components/add-bug-form.component/add-bug-form.component'
import { refreshUserProvider } from '../home/providers/home.provider'
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        refreshStatus: state.HomeReducer.refreshStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshUser: () => dispatch(refreshUserProvider()),
    }
}

class AddBugContainer extends Component {

    constructor() {
        super()
        this.state = {}
        this.authMiddleware = this.authMiddleware.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!localStorage.getItem('token')) {
            nextProps.history.push('/login')
        }
        return null
    }

    componentDidMount() {
        this.props.refreshUser()
    }

    componentDidUpdate(prevProps, prevState) {
        /*if (prevProps.refreshStatus !== this.props.refreshStatus && this.props.refreshStatus === 'ko') {
            this.props.history.push('/login')
        }*/
    }

    authMiddleware = () => {
        // return <Redirect to="/login" />
    }

    submit = (values) => {
        console.log(values);
    }

    render() {
        return (
            <div>
                {this.props.refreshStatus === 'ko' && this.authMiddleware()}
                <NavbarComponent />
                <div className="container add-bug-container">
                    <AddBugForm onSubmit={this.submit} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBugContainer)