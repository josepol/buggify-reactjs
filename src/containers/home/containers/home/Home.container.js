import React from 'react'
import NavbarComponent from '../../../../components/layout/navbar/Navbar.component'
import { connect } from 'react-redux'
import { listBugsProvider, refreshUserProvider, deleteBugProvider } from '../../providers/home.provider'
import { deleteBugStatusUndefined } from '../../Home.actions'
import BugListComponent from '../../components/bug-list/bug-list.component'
import { Button } from 'react-bootstrap'
import * as Toastr from 'toastr'

import './home.container.scss'

const mapStateToProps = (state, props) => {
    console.log(state)
    return {
        bugs: state.HomeReducer.bugs,
        refreshStatus: state.HomeReducer.refreshStatus,
        deleteBugStatus: state.HomeReducer.deleteBugStatus
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        refreshUser: () => dispatch(refreshUserProvider()),
        listBugsProvider: () => dispatch(listBugsProvider()),
        deleteBug: (bug) => dispatch(deleteBugProvider(bug)),
        deleteBugStatusUndefined: () => dispatch(deleteBugStatusUndefined())
    }
}

class HomeContainer extends React.Component {

    constructor() {
        super()
        this.state = {}
        this.addBug = this.addBug.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!localStorage.getItem('token')) {
            nextProps.history.push('/login')
        }
        return null
    }
    
    componentDidMount() {
        this.props.refreshUser()
        this.props.listBugsProvider()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props)
        if (this.props.deleteBugStatus) {
            Toastr.success('Bug deleted successfully')
            this.props.listBugsProvider()
        } else if (this.deleteBugStatus !== undefined) {
            Toastr.error('There was a problem deleting the bug')
        }
        this.props.deleteBugStatusUndefined()
    }

    addBug() {
        this.props.history.push('/add-bug')
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container home-container">
                    <Button variant="raised" type="button" onClick={this.addBug}>Add bug</Button>
                    <BugListComponent bugs={this.props.bugs} deleteBug={this.props.deleteBug} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)