import React from "react";

interface PersonalizacaoPizzaProps {
  setPersonalizacao: (personalizacao: (prev: string[]) => string[]) => void;
  personalizacao: string[];
}

const PersonalizacaoPizza: React.FC<PersonalizacaoPizzaProps> = ({ setPersonalizacao, personalizacao }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPersonalizacao(prev => {
      if (prev.includes(value)) {
        return prev.filter(p => p !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  return (
    <div>
      <h3>Escolha as Personalizações</h3>
      <label>
        <input type="checkbox" value="extra bacon" checked={personalizacao.includes("extra bacon")} onChange={handleChange} />
        Extra Bacon (+ R$ 3,00)
      </label>
      <label>
        <input type="checkbox" value="sem cebola" checked={personalizacao.includes("sem cebola")} onChange={handleChange} />
        Sem Cebola
      </label>
      <label>
        <input type="checkbox" value="borda recheada" checked={personalizacao.includes("borda recheada")} onChange={handleChange} />
        Borda Recheada (+ R$ 5,00)
      </label>
    </div>
  );
};

export default PersonalizacaoPizza;
