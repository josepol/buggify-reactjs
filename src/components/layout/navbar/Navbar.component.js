import React from 'react'
import AppBar from 'material-ui/AppBar'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DrawerComponent from '../drawer/Drawer.component'
import RightBarMenu from '../right-bar-menu/RightBarMenu.component'
import {getProfileData} from '../../providers/Layout.provider'

const mapStateToProps = (state) => {
    return {
        profile: state.LayoutReducer.profile
    }
}

class NavbarComponent extends React.Component {

    componentDidMount() {
        this.props.getProfileData()
    }

    componentWillReceiveProps() {
        console.log(this.props);
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
                    title="App"
                    onLeftIconButtonClick={() => this.onLeftIconButtonClick()}
                    onTitleClick={() => this.onTitleClick()}
                    iconElementLeft={<DrawerComponent  userProfileData={this.props.profile}/>}
                    iconElementRight={<RightBarMenu  userProfileData={this.props.profile}/>}/>
            </MuiThemeProvider>
        )
    }
}

export default connect(mapStateToProps, {
    getProfileData
})(NavbarComponent)