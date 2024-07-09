import React from "react";
import Home from "./paginas/Home";
import { PedidoProvider } from "./contextos/PedidoContext";

const App: React.FC = () => {
  return (
    <PedidoProvider>
      <Home />
    </PedidoProvider>
  );
};

export default App;
