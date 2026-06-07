// src/App.jsx
import { useState } from 'react';
import Modulo1 from './components/Modulo1';
import Modulo2 from './components/Modulo2';
import Modulo3 from './components/Modulo3';
import Simulador from './components/Simulador';

export default function App() {
  // O estado 'telaAtiva' guarda qual módulo estamos vendo no momento.
  // Começamos na tela inicial (menu).
  const [telaAtiva, setTelaAtiva] = useState('menu');

  // Estilo padrão para os botões do menu ficarem grandes e fáceis de clicar
  const btnStyle = {
    padding: '15px 30px', margin: '10px', fontSize: '1.2rem',
    cursor: 'pointer', borderRadius: '8px', border: 'none',
    backgroundColor: '#3498db', color: 'white', fontWeight: 'bold'
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* Barra de Navegação no topo */}
      <nav style={{ padding: '20px', backgroundColor: '#2c3e50', textAlign: 'center' }}>
        <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo1')}>
          1. O Macro (A Cozinha)
        </button>
        <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo2')}>
          2. O Meio-Termo (O Idioma)
        </button>
        <button className="caixa-animada" style={btnStyle} onClick={() => setTelaAtiva('modulo3')}>
          3. O Micro (As Engrenagens)
        </button>
        <button className="caixa-animada" style={{...btnStyle, backgroundColor: '#e74c3c'}} onClick={() => setTelaAtiva('simulador')}>
          4. Playground
        </button>
      </nav>

      {/* Área Principal: Aqui a mágica acontece! */}
      {/* O React verifica qual é o valor de telaAtiva e mostra apenas o componente certo */}
      <main style={{ padding: '20px' }}>
        
        {telaAtiva === 'menu' && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Bem-vindo à Jornada do Computador! 🚀</h1>
            <p>Escolha um dos módulos acima para começar a explorar a Arquitetura RISC-V.</p>
          </div>
        )}

        {telaAtiva === 'modulo1' && <Modulo1 />}
        
        {telaAtiva === 'modulo2' && <Modulo2 />}
        {telaAtiva === 'modulo3' && <Modulo3 />}
        {telaAtiva === 'simulador' && <Simulador />}

      </main>
    </div>
  );
}