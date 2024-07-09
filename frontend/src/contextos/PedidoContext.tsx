import React, { createContext, useState, ReactNode } from "react";

interface PedidoContextProps {
  pedido: any[];
  adicionarPizza: (pizza: any) => void;
}

const PedidoContext = createContext<PedidoContextProps | undefined>(undefined);

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pedido, setPedido] = useState<any[]>([]);

  const adicionarPizza = (pizza: any) => {
    setPedido([...pedido, pizza]);
  };

  return (
    <PedidoContext.Provider value={{ pedido, adicionarPizza }}>
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => {
  const context = React.useContext(PedidoContext);
  if (!context) {
    throw new Error("usePedido deve ser usado dentro de um PedidoProvider");
  }
  return context;
};
