import React from 'react'
import NavbarComponent from './../../components/layout/navbar/Navbar.component'
import {connect} from 'react-redux'
import {listBugsProvider} from './providers/home.provider'
import BugListComponent from './components/bug-list.component'

const mapStateToProps = (state) => {
    return {
        bugs: state.HomeReducer.bugs
    }
}

class HomeContainer extends React.Component {
    
    componentDidMount() {
        this.props.listBugsProvider()
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <BugListComponent bugs={this.props.bugs} />
            </div>
        )
    }
}

export default connect(mapStateToProps, {
    listBugsProvider
})(HomeContainer)