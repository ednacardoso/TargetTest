import React, { useState } from 'react';

const InverterString: React.FC = () => {
  const [texto, setTexto] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  const inverter = (str: string) => {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  };

  const handleInverter = () => {
    setResultado(inverter(texto));
  };

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma palaravra"
      />
      <button onClick={handleInverter}>Inverter</button>
      {resultado && <p> Palavra Invertida: {resultado}</p>}
    </div>
  );
};

export default InverterString;
