import React, { useState } from "react";
import ListaPizzas from "../componentes/ListaPizzas";
import ModalDetalhesPedido from "../componentes/ModalDetalhesPedido";
import { usePedido } from "../contextos/PedidoContext";

const Home: React.FC = () => {
  const { pedido } = usePedido();
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div>
      <ListaPizzas />
      <button onClick={abrirModal}>Montar Pedido</button>
      {modalAberto && <ModalDetalhesPedido closeModal={fecharModal} pedido={pedido} />}
    </div>
  );
};

export default Home;
