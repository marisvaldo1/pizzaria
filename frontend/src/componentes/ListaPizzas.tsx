import React, { useEffect, useState } from "react";
import api from "../servicos/api";
import { usePedido } from "../contextos/PedidoContext";
import TamanhoPizza from "./TamanhoPizza";
import SaborPizza from "./SaborPizza";
import PersonalizacaoPizza from "./PersonalizacaoPizza";

const ListaPizzas: React.FC = () => {
  const [pizzas, setPizzas] = useState<any[]>([]);
  const { adicionarPizza } = usePedido();
  const [tamanho, setTamanho] = useState("");
  const [sabor, setSabor] = useState("");
  const [personalizacao, setPersonalizacao] = useState<string[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      const response = await api.get("/pizzas");
      setPizzas(response.data);
    };
    fetchPizzas();
  }, []);

  const handleAdicionarPizza = () => {
    const pizzaEscolhida = pizzas.find(p => p.sabor === sabor && p.tamanho === tamanho);
    const precoPersonalizacao = personalizacao.includes("extra bacon") ? 3 : 0;
    const tempoPersonalizacao = personalizacao.includes("borda recheada") ? 5 : 0;
    const tempoPreparo = pizzaEscolhida.tempo_preparo + (sabor === "portuguesa" ? 5 : 0) + tempoPersonalizacao;
    const precoTotal = pizzaEscolhida.preco + precoPersonalizacao;

    adicionarPizza({
      ...pizzaEscolhida,
      personalizacao,
      tempo_preparo: tempoPreparo,
      preco: precoTotal
    });
  };

  return (
    <div>
      <h2>Escolha sua Pizza</h2>
      <TamanhoPizza setTamanho={setTamanho} tamanho={tamanho} />
      <SaborPizza setSabor={setSabor} sabor={sabor} />
      <PersonalizacaoPizza setPersonalizacao={setPersonalizacao} personalizacao={personalizacao} />
      <button onClick={handleAdicionarPizza}>Adicionar Pizza</button>
    </div>
  );
};

export default ListaPizzas;
