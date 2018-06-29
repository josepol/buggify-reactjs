import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Style from '../Layout.style'

export default class RightBarMenu extends React.Component {
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
                <MenuItem><Link to='/'>Logout</Link></MenuItem>
            </IconMenu>
        )
    }
}