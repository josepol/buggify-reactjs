import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Style from '../Layout.style'

const iconMenuConfig = {
    horizontal: 'left',
    vertical: 'top'
}

export default class RightBarMenu extends React.Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout() {
        localStorage.clear()
    }

    iconButton = (
        <IconButton
            iconStyle={Style.iconButton}>
            <MoreVertIcon />
        </IconButton>
    )

    render() {
        return (
            <IconMenu
                iconButtonElement={this.iconButton}
                anchorOrigin={iconMenuConfig}
                targetOrigin={iconMenuConfig} >
                <Link to='/'><MenuItem onClick={this.logout}>Logout</MenuItem></Link>
            </IconMenu>
        )
    }
}