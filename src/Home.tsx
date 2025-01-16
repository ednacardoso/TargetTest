import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="App">
      <header>
        <h1>Desafios Resolvidos</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/soma">Questão 1: Soma Acumulativa</Link></li>
          <li><Link to="/fibonacci">Questão 2: Sequência Fibonacci</Link></li>
          <li><Link to="/faturamento">Questão 3: Faturamento Diário</Link></li>
          <li><Link to="/percentual">Questão 4: Representação Percentual</Link></li>
          <li><Link to="/inverter">Questão 5: Inversão de Palavra</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;
