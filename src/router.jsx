import Plataforma from './pages/Plataforma';
  <Route path="/projetos/plataforma" element={<Plataforma />} />
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PDV from './pages/PDV';
import AutoColor from './pages/AutoColor';
import FisioClinic from './pages/FisioClinic'; // Importing FisioClinic
// Importe outros projetos conforme necessário

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdv" element={<PDV />} />
        <Route path="/projetos/pdv" element={<PDV />} />
        <Route path="/autocolor" element={<AutoColor />} />
        <Route path="/projetos/autocolor" element={<AutoColor />} />
          <Route path="/projetos/fisioclinic" element={<FisioClinic />} /> // Adding FisioClinic route
      </Routes>
    </BrowserRouter>
  );
}
