import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import AddBugForm from './components/add-bug-form.component/add-bug-form.component'
import { refreshUserProvider } from '../home/providers/home.provider'
import { addBugProvider } from './providers/add-bug.provider'
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        refreshStatus: state.HomeReducer.refreshStatus,
        addBugStatus: state.AddBugReducer.addBugStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshUser: () => dispatch(refreshUserProvider()),
        addBug: (bug) => dispatch(addBugProvider(bug))
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
        console.log(nextProps, prevState);
        return null
    }

    componentDidMount() {
        this.props.refreshUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.refreshStatus !== this.props.refreshStatus && this.props.refreshStatus === 'ko') {
            this.props.history.push('/login')
        }
        console.log(prevProps, prevState);
    }

    authMiddleware = () => {
        return <Redirect to="/login" />
    }

    submit = (value) => {
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