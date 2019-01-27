import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
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

    avatar = (
        <Avatar>{this.props && this.props.userProfileData.name && this.props.userProfileData.name.substring(0, 1)}</Avatar>
    )

    render() {
        return (
            <React.Fragment>
                {this.redirect()}
                <IconButton
                    onClick={this.handleToggle}
                    iconStyle={Style.iconButton}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <br/>
                    <ListItem
                        disabled={true}
                        leftAvatar={this.avatar}>
                        {this.props.userProfileData.name}
                    </ListItem>
                    <br/>
                    <Subheader>MAIN</Subheader>
                    <Link to='/'><MenuItem onClick={this.handleClose}>Bugs</MenuItem></Link>
                    {/*<Link to='/snippets'><MenuItem onClick={this.handleClose}>Snippets</MenuItem></Link>*/}
                    <br/>
                    <Subheader>CONFIG</Subheader>
                    <Link to='/'><MenuItem onClick={this.handleClose}>Logout</MenuItem></Link>
                </Drawer>
            </React.Fragment>
        )
    }
}