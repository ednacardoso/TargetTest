import './App.css';
import SomaAcumulativa from './components/SomaAcumulativa';
import SequenciaFibonacci from './components/SequenciaFibonacci';
import FaturamentoDiario from './components/FaturamentoDiario';
import PercentualRepresentacao from './components/PercentualRepresentacao';
import InverterString from './components/InverterString';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Desafios Resolvidos</h1>
      </header>
      <main>
        {/* Cada componente representando uma questão */}
        <section>
          <div>
            <h2>Questão 1: Soma Acumulativa</h2>
            <p>Clique no botão para saber o resultado:</p>
          </div>
          <SomaAcumulativa />
        </section>
        <section>
          <div>
            <h2>Questão 2: Sequência Fibonacci</h2>
            <p>Digite um número para saber se ele pertence à 
              sequência de Fibonacci, e depois clique em verificar:</p>
          </div>          
          <SequenciaFibonacci />
        </section>
        <section>
          <div>
            <h2>Questão 3: Faturamento Diário</h2>
            <p>Clique no botão para saber o resultado:</p>
          </div>
          <FaturamentoDiario />
        </section>
        <section>
          <div>
            <h2>Questão 4: Representação Percentual</h2>
          </div>
          <PercentualRepresentacao />
        </section>
        <section>
          <div>
            <h2>Questão 5: Inversão de Palavra</h2>
          </div>
          <InverterString />
        </section>
      </main>
    </div>
  );
}

export default App;

