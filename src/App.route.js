import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './containers/home/Home.container'
import AddBugContainer from './containers/add-bug/Add-bug.container'

export default () => (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/add' component={AddBugContainer} />
    </Switch>
)