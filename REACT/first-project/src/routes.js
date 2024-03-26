import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home'
import Users from './containers/Users'

function MyRoutes() {
    return (
        <Router>
            {/* O Switch serva para que no momento em que for achado a rota em questão, ele já entre na rota, não fique percorrendo por todas outras possíveis rotas, achando a correta ele já entra e para. */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/usuarios' element={<Users />} />
            </ Routes>
        </Router>
    )
}

export default MyRoutes