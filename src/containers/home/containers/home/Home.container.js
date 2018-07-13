import React from 'react'
import NavbarComponent from '../../../../components/layout/navbar/Navbar.component'
import { connect } from 'react-redux'
import { listBugsProvider, refreshUserProvider } from '../../providers/home.provider'
import BugListComponent from '../../components/bug-list/bug-list.component'
import { Button } from 'react-bootstrap'

import './home.container.scss'

const mapStateToProps = (state, props) => {
    return {
        bugs: state.HomeReducer.bugs,
        refreshStatus: state.HomeReducer.refreshStatus
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        refreshUser: () => dispatch(refreshUserProvider()),
        listBugsProvider: () => dispatch(listBugsProvider())
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
        /*if (prevProps.refreshStatus !== this.props.refreshStatus && this.props.refreshStatus === 'ko') {
            this.props.history.push('/login')
        }*/
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
                    <BugListComponent bugs={this.props.bugs} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)