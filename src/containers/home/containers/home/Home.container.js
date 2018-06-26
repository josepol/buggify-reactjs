import React from 'react'
import NavbarComponent from '../../../../components/layout/navbar/Navbar.component'
import { connect } from 'react-redux'
import { listBugsProvider, refreshUserProvider } from '../../providers/home.provider'
import BugListComponent from '../../components/bug-list.component'

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
    }

    componentWillMount() {
        if (!localStorage.getItem('token')) {
            this.props.history.push('/login')
        }
    }
    
    componentDidMount() {
        this.props.refreshUser()
        this.props.listBugsProvider()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.refreshStatus)
        if (this.props.refreshStatus === 'ko') {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container home-container">
                    <BugListComponent bugs={this.props.bugs} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)