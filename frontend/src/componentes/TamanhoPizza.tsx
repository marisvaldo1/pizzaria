import React from "react";

interface TamanhoPizzaProps {
  setTamanho: (tamanho: string) => void;
  tamanho: string;
}

const TamanhoPizza: React.FC<TamanhoPizzaProps> = ({ setTamanho, tamanho }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTamanho(event.target.value);
  };

  return (
    <div>
      <h3>Escolha o Tamanho</h3>
      <label>
        <input type="radio" value="pequena" checked={tamanho === "pequena"} onChange={handleChange} />
        Pequena
      </label>
      <label>
        <input type="radio" value="media" checked={tamanho === "media"} onChange={handleChange} />
        Média
      </label>
      <label>
        <input type="radio" value="grande" checked={tamanho === "grande"} onChange={handleChange} />
        Grande
      </label>
    </div>
  );
};

export default TamanhoPizza;
