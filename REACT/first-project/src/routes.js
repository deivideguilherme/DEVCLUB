import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home'
import Users from './containers/Users'

function Routes() {
    return (
        <Router>
            {/* O Switch serva para que no momento em que for achado a rota em questão, ele já entre na rota, não fique percorrendo por todas outras possíveis rotas, achando a correta ele já entra e para. */}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/usuarios' component={Users} />
            </ Switch>
        </Router>
    )
}

export default Routes