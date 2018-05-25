import React from 'react'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import { connect } from 'react-redux'
import { listBugsProvider } from './providers/home.provider'
import BugListComponent from './components/bug-list.component'

const mapStateToProps = (state, props) => {
    return {
        bugs: state.HomeReducer.bugs
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        listBugsProvider: () => {
            return dispatch(listBugsProvider())
        }
    }
}

class HomeContainer extends React.Component {
    
    componentDidMount() {
        this.props.listBugsProvider();
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container">
                    <BugListComponent bugs={this.props.bugs} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)