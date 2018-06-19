import React from 'react'
import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DrawerComponent from '../drawer/Drawer.component'
import RightBarMenu from '../right-bar-menu/RightBarMenu.component'
import {getProfileData} from '../../providers/Layout.provider'

const mapStateToProps = (state) => {
    const layoutReducer = state.LayoutReducer
    return {
        profile: layoutReducer.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfileData: () => dispatch(getProfileData())
    }
}

class NavbarComponent extends React.Component {

    componentDidMount() {
        this.props.getProfileData()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState);
        return null
    }

    componentDidUpdate(prevProps, newState) {
        console.log(prevProps, newState)
    }

    onTitleClick() {
        console.log('menu')
    }

    onLeftIconButtonClick() {
        console.log('title')
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Buggify"
                    onLeftIconButtonClick={() => this.onLeftIconButtonClick()}
                    onTitleClick={() => this.onTitleClick()}
                    iconElementLeft={<DrawerComponent  userProfileData={this.props.profile}/>}
                    iconElementRight={<RightBarMenu  userProfileData={this.props.profile}/>}/>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)