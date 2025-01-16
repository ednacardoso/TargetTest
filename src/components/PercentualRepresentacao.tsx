import React from 'react';

const PercentualRepresentacao: React.FC = () => {
  const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
  const percentuais = Object.entries(faturamento).map(([estado, valor]) => ({
    estado,
    percentual: (valor / total) * 100,
  }));

  return (
    <div>
      <h3>Percentual de Representação</h3>
      {percentuais.map(({ estado, percentual }) => (
        <p key={estado}>
          {estado}: {percentual.toFixed(2)}%
        </p>
      ))}
    </div>
  );
};

export default PercentualRepresentacao;
