import React, { useState } from 'react';

const SomaAcumulativa: React.FC = () => {
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularSoma = () => {
    const indice = 13;
    let soma = 0;
    let k = 0;
    while (k < indice) {
      k += 1;
      soma += k;
    }
    setResultado(soma);
  };

  return (
    <div>
      <div>
        <button onClick={calcularSoma}>Calcular Soma Acumulativa</button>
      </div>
      <div>
        {resultado !== null && <p>Resultado: {resultado}</p>}
      </div>      
    </div>
  );
};

export default SomaAcumulativa;
