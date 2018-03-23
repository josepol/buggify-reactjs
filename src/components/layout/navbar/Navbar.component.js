import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DrawerComponent from '../drawer/Drawer.component'
import RightBarMenu from '../right-bar-menu/RightBarMenu.component'

export default class NavbarComponent extends React.Component {

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
                    iconElementLeft={<DrawerComponent/>}
                    iconElementRight={<RightBarMenu/>}/>
            </MuiThemeProvider>
        )
    }
}