import React, { useState } from 'react';

const Fibonacci: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [resultado, setResultado] = useState<string | null>(null);

  const verificarFibonacci = () => {
    let a = 0, b = 1;
    while (b < numero) {
      [a, b] = [b, a + b];
    }
    setResultado(b === numero || a === numero ? 'Pertence à sequência' : 'Não pertence à sequência');
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Digite um número"
      />
      <button onClick={verificarFibonacci}>Verificar</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default Fibonacci;
