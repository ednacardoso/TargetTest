import React, { useState, useEffect } from 'react';

interface Faturamento {
  dia: number;
  valor: number;
}

const FaturamentoDiario: React.FC = () => {
  const [faturamento, setFaturamento] = useState<Faturamento[]>([]);
  const [resultado, setResultado] = useState<{ menor: number; maior: number; diasAcimaMedia: number } | null>(null);

  useEffect(() => {
    fetch('/public/file2.xml')
      .then((res) => res.text())
      .then((str) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, 'text/xml');
        const rows = Array.from(xmlDoc.getElementsByTagName('row')).map((row) => ({
          dia: parseInt(row.getElementsByTagName('dia')[0].textContent || '0'),
          valor: parseFloat(row.getElementsByTagName('valor')[0].textContent || '0'),
        }));
        setFaturamento(rows);
      })
      .catch((err) => console.error('Erro ao carregar XML:', err));
  }, []);

  const calcularFaturamento = () => {
    const valores = faturamento.map((f) => f.valor).filter((v) => v > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, curr) => acc + curr, 0) / valores.length;
    const diasAcimaMedia = valores.filter((v) => v > media).length;

    setResultado({ menor, maior, diasAcimaMedia });
  };

  return (
    <div>
      <button onClick={calcularFaturamento}>Calcular Faturamento</button>
      {resultado && (
        <div>
          <p>Menor valor: R$ {resultado.menor.toFixed(2)}</p>
          <p>Maior valor: R$ {resultado.maior.toFixed(2)}</p>
          <p>Dias acima da média: {resultado.diasAcimaMedia}</p>
        </div>
      )}
    </div>
  );
};

export default FaturamentoDiario;
