import React from "react";

interface SaborPizzaProps {
  setSabor: (sabor: string) => void;
  sabor: string;
}

const SaborPizza: React.FC<SaborPizzaProps> = ({ setSabor, sabor }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSabor(event.target.value);
  };

  return (
    <div>
      <h3>Escolha o Sabor</h3>
      <label>
        <input type="radio" value="calabresa" checked={sabor === "calabresa"} onChange={handleChange} />
        Calabresa
      </label>
      <label>
        <input type="radio" value="marguerita" checked={sabor === "marguerita"} onChange={handleChange} />
        Marguerita
      </label>
      <label>
        <input type="radio" value="portuguesa" checked={sabor === "portuguesa"} onChange={handleChange} />
        Portuguesa
      </label>
    </div>
  );
};

export default SaborPizza;
