import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeContainer from './containers/home/Home.container'

export default () => (
    <Switch>
        <Route exact path='/' component={HomeContainer} />
    </Switch>
)