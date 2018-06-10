import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './containers/home/containers/home/Home.container'
import AddBugContainer from './containers/add-bug/Add-bug.container'
import LoginContainer from './containers/login/Login.container'

export default () => (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/add' component={AddBugContainer} />
        <Route exact path='/login' component={LoginContainer} />
    </Switch>
)