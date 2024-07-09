import React from "react";
import { usePedido } from "../contextos/PedidoContext";
import api from "../servicos/api";

interface ModalDetalhesPedidoProps {
  closeModal: () => void;
  pedido: any[];
}

const ModalDetalhesPedido: React.FC<ModalDetalhesPedidoProps> = ({ closeModal, pedido }) => {
  const totalPreco = pedido.reduce((acc, pizza) => acc + pizza.preco, 0);
  const totalTempo = pedido.reduce((acc, pizza) => acc + pizza.tempo_preparo, 0);

  const handleFecharPedido = async () => {
    await api.post("/pedidos", { pizzas: pedido });
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Detalhes do Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Tamanho</th>
            <th>Sabor</th>
            <th>Personalização</th>
            <th>Preço</th>
            <th>Tempo de Preparo</th>
          </tr>
        </thead>
        <tbody>
          {pedido.map((pizza, index) => (
            <tr key={index}>
              <td>{pizza.tamanho}</td>
              <td>{pizza.sabor}</td>
              <td>{pizza.personalizacao.join(", ")}</td>
              <td>{pizza.preco}</td>
              <td>{pizza.tempo_preparo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: R$ {totalPreco}</p>
      <p>Tempo Total de Preparo: {totalTempo} minutos</p>
      <button onClick={handleFecharPedido}>Fechar Pedido</button>
    </div>
  );
};

export default ModalDetalhesPedido;
