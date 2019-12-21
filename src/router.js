import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Button from './pages/ui/button'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path='/' render={()=>{
                    return (
                        <App>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/admin' render={() => {
                                return(
                                    <Admin>
                                        <Route path='/admin/ui/buttons' component={Button}></Route>
                                    </Admin>
                                )
                            }}></Route>
                        </App>
                    )
                }}></Route>
            </HashRouter>
        )
    }
}