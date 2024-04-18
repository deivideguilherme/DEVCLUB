import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Pedidos from "./containers/Pedidos";

function myRoutes() {
  return (
    <Router>
      {/*O Routes (antigo Switch) faz com que assim que a rota for encontrada ele já entre na rota, sem o switch, se existissem mais rotas, por mais que ele encontra-se a rota escolhida, ele percorreria por todas as demais existentes.*/}  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>

    </Router>
  );
}

export default myRoutes;
