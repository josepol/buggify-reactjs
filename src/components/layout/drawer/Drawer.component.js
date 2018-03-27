import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Drawer from 'material-ui/Drawer'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import FontIcon from 'material-ui/FontIcon'
import Style from '../Layout.style'

const iconStyles = {
    marginRight: 24,
    paddingTop: 30,
  };

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
                    <br/>
                    <ListItem
                        disabled={true}
                        leftAvatar={<Avatar>{this.props.userProfileData.name && this.props.userProfileData.name.substring(0, 1)}</Avatar>}>
                        {this.props.userProfileData.name}
                    </ListItem>
                    <br/>
                    <Subheader>Principal</Subheader>
                    <MenuItem onClick={this.handleClose}><FontIcon className="material-icons" style={iconStyles} color={'#BCBCBC'}>home</FontIcon>INICIO</MenuItem>
                    <MenuItem onClick={this.handleClose}><FontIcon className="material-icons" style={iconStyles} color={'#BCBCBC'}>archive</FontIcon>PRODUCTOS</MenuItem>
                    <MenuItem onClick={this.handleClose}><FontIcon className="material-icons"color={'#BCBCBC'}>chart-bar</FontIcon>VENTAS</MenuItem>
                    <br/>
                    <Subheader>Configuración</Subheader>
                    <MenuItem onClick={this.handleClose}>ADMIN</MenuItem>
                    <MenuItem onClick={this.handleClose}>PERFIL</MenuItem>
                    <MenuItem onClick={this.handleClose}>CERRAR SESIÓN</MenuItem>
                </Drawer>
            </div>
        )
    }
}