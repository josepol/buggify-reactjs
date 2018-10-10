import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import AddBugForm from './components/add-bug-form.component/add-bug-form.component'
import { refreshUserProvider } from '../home/providers/home.provider'
import { addBugProvider, addFileProvider } from './providers/add-bug.provider'
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
        addFile: (formData) => dispatch(addFileProvider(formData)),
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
        console.log(this.props)
        if (this.props.addBugStatus && this.props.bugId) {
            this.sendImage(this.props.bugId, this.state.file)
            Toastr.success('Bug registered successfully')
        } else {
            Toastr.error('There was a problem registering the bug')
        }
    }

    authMiddleware = () => {
        return <Redirect to="/login" />
    }

    submit = (value) => {
        this.props.addBug(value)
        this.setState({
            file: value.file
        })
    }

    sendImage = (id, file) => {
        console.log(this.props)
        const formData = new FormData()
        formData.append('id', id)
        formData.append('file', file)
        this.props.addFile(formData)
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