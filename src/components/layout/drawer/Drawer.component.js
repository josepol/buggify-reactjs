import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Drawer from 'material-ui/Drawer'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import Style from '../Layout.style'
import { Redirect, Link } from 'react-router-dom'

export default class DrawerComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false,
            redirect: false,
            redirectTo: undefined
        }
    }

    handleToggle = () => this.setState({open: !this.state.open})
    handleClose = () => this.setState({open: false})

    redirect = () => {
        if (this.state.redirect) 
            return <Redirect to={this.state.redirectTo}/>
    }

    render() {
        return (
            <div>
                {this.redirect()}
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
                    <Subheader>PRINCIPAL</Subheader>
                    <MenuItem onClick={this.handleClose}>Incidencias</MenuItem>
                    <MenuItem onClick={this.handleClose}><Link to='/add'>Añadir incidencia</Link></MenuItem>
                    <br/>
                    <Subheader>CONFIGURACIÓN</Subheader>
                    <MenuItem onClick={this.handleClose}>Admin</MenuItem>
                    <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={this.handleClose}>Cerrar sesión</MenuItem>
                </Drawer>
            </div>
        )
    }
}