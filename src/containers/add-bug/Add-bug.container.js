import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import AddBugForm from './components/add-bug-form.component/add-bug-form.component'
import { refreshUserProvider } from '../home/providers/home.provider'
import { addBugProvider } from './providers/add-bug.provider'
import {Redirect} from 'react-router-dom'
import * as Toastr from 'toastr'
import { resetAddBugStatus } from './Add-bug.actions'

const mapStateToProps = (state) => {
    return {
        refreshStatus: state.HomeReducer.refreshStatus,
        addBugStatus: state.AddBugReducer.addBugStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshUser: () => dispatch(refreshUserProvider()),
        addBug: (bug) => dispatch(addBugProvider(bug)),
        resetAddBugStatus: () => dispatch(resetAddBugStatus())
    }
}

class AddBugContainer extends Component {

    initial = true

    constructor() {
        super()
        this.state = {}
        this.authMiddleware = this.authMiddleware.bind(this)
    }

    componentDidMount() {
        this.props.refreshUser()
    }

    componentDidUpdate(prevProps, prevState) {
        this.addBugCallback();
        this.props.resetAddBugStatus();
    }

    addBugCallback = () => {
        if (this.props.addBugStatus === undefined || this.initial) {
            this.initial = false
            return;
        }
        if (this.props.addBugStatus) {
            Toastr.success('Bug registered successfully')
        } else {
            Toastr.error('There was a problem registering the bug')
        }
    }

    authMiddleware = () => {
        return <Redirect to="/login" />
    }

    submit = (value) => {
        console.log(value)
        this.props.addBug(value);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.refreshStatus === 'ko' && this.authMiddleware()}
                <NavbarComponent />
                <div className="container add-bug-container">
                    <AddBugForm onSubmit={this.submit} />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBugContainer)