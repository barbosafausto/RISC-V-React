// src/App.jsx
import { useState } from 'react';
import  Home from './components/Home';
import Modulo1 from './components/Modulo1';
import Modulo2 from './components/Modulo2';
import Modulo3 from './components/Modulo3';
import Simulador from './components/Simulador';
import './App.css'

export default function App() {
  // O estado 'telaAtiva' guarda qual módulo estamos vendo no momento.
  // Começamos na tela inicial (menu).
  const [telaAtiva, setTelaAtiva] = useState('menu');

  // Estilo padrão para os botões do menu ficarem grandes e fáceis de clicar
  const btnStyle = {
    padding: '15px 30px', 
    margin: '10px', 
    fontSize: '1.2rem', 

    cursor: 'pointer', 
    borderRadius: '8px', 
    border: 'none',
    backgroundColor: '#3498db', 
    color: 'white', 
    fontWeight: 'bold'
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Barra de Navegação no topo */}
      <nav className="nav-main">
        <div><h1 style={{color: 'white', fontFamily: 'Poppins'}}>COZINHA DO COMPUTADOR</h1></div>
        <div>
          <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('menu')}>
            Início
          </button>
          <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo1')}>
            Macro
          </button>
          <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo2')}>
            Meio-Termo
          </button>
          <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo3')}>
            Micro
          </button>
          <button className="caixa-animada" style={{...btnStyle, backgroundColor: '#e74c3c'}} onClick={() => setTelaAtiva('simulador')}>
            Playground
          </button>
        </div>
      </nav>

      {/* Área Principal: Aqui a mágica acontece! */}
      {/* O React verifica qual é o valor de telaAtiva e mostra apenas o componente certo */}
      <main style={{ padding: '20px' }}>
        
        {telaAtiva === 'menu' && <Home />}
        {telaAtiva === 'modulo1' && <Modulo1 />}        
        {telaAtiva === 'modulo2' && <Modulo2 />}
        {telaAtiva === 'modulo3' && <Modulo3 />}
        {telaAtiva === 'simulador' && <Simulador />}

      </main>

      <footer className="footer-site">
        <div className="footer-content">
          <p>© 2026 Jornada do Computador. Um Recurso Educacional Aberto (REA).</p>
          <p>Desenvolvido para a disciplina de Organização e Arquitetura de Computadores</p>
          <p><strong>ICMC - USP São Carlos</strong></p>
        </div>
      </footer>
    </div>
  );
}