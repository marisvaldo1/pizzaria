import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { PedidoProvider } from "../contextos/PedidoContext";

test("deve permitir que o usuário crie um pedido de pizza", () => {
  render(
    <PedidoProvider>
      <App />
    </PedidoProvider>
  );

  fireEvent.click(screen.getByText("Calabresa"));
  fireEvent.click(screen.getByText("Pequena"));
  fireEvent.click(screen.getByText("Adicionar Pizza"));

  fireEvent.click(screen.getByText("Montar Pedido"));

  expect(screen.getByText("Detalhes do Pedido")).toBeInTheDocument();
  expect(screen.getByText("Calabresa")).toBeInTheDocument();
  expect(screen.getByText("Pequena")).toBeInTheDocument();
});
