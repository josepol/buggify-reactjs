import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Drawer from 'material-ui/Drawer'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader';
import Style from '../Layout.style'

export default class DrawerComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <IconButton
                    onClick={this.handleToggle}
                    iconStyle={Style.iconButton}>
                    <MoreVertIcon />
                </IconButton>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <ListItem
                        disabled={true}
                        leftAvatar={<Avatar>{this.props.userProfileData.name && this.props.userProfileData.name.substring(0, 1)}</Avatar>}>
                        {this.props.userProfileData.name}
                    </ListItem>
                    <Subheader>Bugs</Subheader>
                    <MenuItem onClick={this.handleClose}>Listar bugs</MenuItem>
                    <MenuItem onClick={this.handleClose}>Añadir bug</MenuItem>
                </Drawer>
            </div>
        )
    }
}