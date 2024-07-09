import React from "react";
import { usePedido } from "../contextos/PedidoContext";
import ModalDetalhesPedido from "./ModalDetalhesPedido";

const Pedido: React.FC = () => {
  const { pedido } = usePedido();
  const [mostrarModal, setMostrarModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setMostrarModal(true)}>Montar Pedido</button>
      {mostrarModal && <ModalDetalhesPedido closeModal={() => setMostrarModal(false)} pedido={pedido} />}
    </div>
  );
};

export default Pedido;

