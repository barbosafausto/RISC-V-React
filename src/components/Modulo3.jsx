// src/components/Modulo3.jsx

import { useState } from 'react';

export default function Modulo3() {
  // 1. ESTADOS PARA OS REGISTRADORES
  // No React, quando queremos ler o que o usuário digita em um <input>, 
  // precisamos atrelar esse input a uma variável de estado.
  // Vamos criar dois "registradores" virtuais para a nossa ULA somar.
  const [regA, setRegA] = useState(0);
  const [regB, setRegB] = useState(0);
  
  // E um estado para guardar o resultado que sai da ULA
  const [resultado, setResultado] = useState(null);

  // 2. FUNÇÃO DA ULA
  // Esta função simula o ciclo de execução da nossa instrução ADD.
  function processarNaULA() {
    // No JavaScript, o sinal de + junta strings se não tomarmos cuidado.
    // O comando Number() garante que estamos somando números inteiros.
    const soma = Number(regA) + Number(regB);
    setResultado(soma);
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      
      <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>⚙️ As Engrenagens (O Micro)</h1>
      
      <p style={{ fontSize: '1.2rem', color: '#34495e', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
        Lá no fundo, a CPU não entende conceitos abstratos. Ela funciona como uma fábrica cheia de <strong>trilhos de trem (barramentos)</strong>. 
        Os dados precisam estar nos lugares exatos — chamados <strong>Registradores</strong> — para que a máquina de calcular (a ULA) consiga operá-los.
      </p>

      {/* Container Principal do Simulador da ULA */}
      <div style={{ backgroundColor: '#ecf0f1', padding: '40px', borderRadius: '15px', marginTop: '40px', display: 'inline-block', border: '3px solid #bdc3c7' }}>
        <h2 style={{ marginTop: '0', color: '#2c3e50' }}>A Unidade Lógica e Aritmética (ULA)</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '30px' }}>Simulando a instrução: <code>add t2, t0, t1</code></p>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          
          {/* REGISTRADOR 1 (t0) */}
          <div style={{ backgroundColor: '#3498db', padding: '20px', borderRadius: '10px', color: 'white' }}>
            <h3>Registrador t0</h3>
            {/* O evento 'onChange' é disparado a cada tecla que o usuário aperta.
                'e.target.value' captura o que foi digitado e joga no estado. */}
            <input 
              type="number" 
              value={regA} 
              onChange={(e) => setRegA(e.target.value)}
              style={{ width: '80px', padding: '10px', fontSize: '1.5rem', textAlign: 'center', borderRadius: '5px', border: 'none' }}
            />
          </div>

          <h2 style={{ color: '#2c3e50', fontSize: '2.5rem', margin: '0 10px' }}>+</h2>

          {/* REGISTRADOR 2 (t1) */}
          <div style={{ backgroundColor: '#e67e22', padding: '20px', borderRadius: '10px', color: 'white' }}>
            <h3>Registrador t1</h3>
            <input 
              type="number" 
              value={regB} 
              onChange={(e) => setRegB(e.target.value)}
              style={{ width: '80px', padding: '10px', fontSize: '1.5rem', textAlign: 'center', borderRadius: '5px', border: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
            <h2 style={{ color: '#2c3e50', fontSize: '2.5rem', margin: '0' }}>=</h2>
            {/* Botão que dispara o Ciclo de Execução */}
            <button 
              onClick={processarNaULA}
              style={{ marginTop: '10px', padding: '10px 15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Executar na ULA
            </button>
          </div>

          {/* REGISTRADOR DE DESTINO (t2) */}
          <div style={{ backgroundColor: '#9b59b6', padding: '20px', borderRadius: '10px', color: 'white', minWidth: '120px' }}>
            <h3>Destino t2</h3>
            {/* Renderização condicional: se resultado for nulo, mostra '?', senão mostra o valor */}
            <div style={{ backgroundColor: 'white', color: '#2c3e50', padding: '10px', fontSize: '1.5rem', textAlign: 'center', borderRadius: '5px', fontWeight: 'bold' }}>
              {resultado === null ? '?' : resultado}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}