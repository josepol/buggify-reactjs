import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Style from '../Layout.style'

export default class RightBarMenu extends React.Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout() {
        localStorage.clear()
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton
                        iconStyle={Style.iconButton}>
                        <MoreVertIcon />
                    </IconButton>
                }
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                <MenuItem onClick={this.logout}><Link to='/'>Logout</Link></MenuItem>
            </IconMenu>
        )
    }
}