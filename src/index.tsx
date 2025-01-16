import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import SomaAcumulativa from './components/pages/SomaAcumulativa';
import SequenciaFibonacci from './components/pages/SequenciaFibonacci';
import FaturamentoDiario from './components/pages/FaturamentoDiario';
import PercentualRepresentacao from './components/pages/PercentualRepresentacao';
import InverterString from './components/pages/InverterString';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soma" element={<SomaAcumulativa />} />
        <Route path="/fibonacci" element={<SequenciaFibonacci />} />
        <Route path="/faturamento" element={<FaturamentoDiario />} />
        <Route path="/percentual" element={<PercentualRepresentacao />} />
        <Route path="/inverter" element={<InverterString />} />
      </Routes>
    </BrowserRouter>
  )
}
