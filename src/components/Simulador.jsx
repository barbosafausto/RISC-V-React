// src/components/Simulador.jsx

import { useState } from 'react';

export default function Simulador() {
  // 1. O ESTADO DO NOSSO PROCESSADOR
  // 'fase' controla em qual ciclo de instrução estamos (de 0 a 4).
  // É como se fosse o nosso PC (Program Counter) super simplificado.
  const [fase, setFase] = useState(0);

  // 2. A MEMÓRIA PRINCIPAL (RAM)
  // Vamos simular uma memória com 3 posições.
  // Posição 0 e 1 têm nossos "ingredientes". Posição 2 está vazia aguardando o resultado.
  const memoria = [15, 25, fase === 4 ? 40 : "Vazio"]; 

  // 3. OS REGISTRADORES
  // O valor deles depende da 'fase' atual do clock.
  const regT0 = fase >= 1 ? memoria[0] : "Vazio";
  const regT1 = fase >= 2 ? memoria[1] : "Vazio";
  const regT2 = fase >= 3 ? 40 : "Vazio";

  // 4. O SINAL DE CLOCK
  // Função que avança o ciclo do nosso processador
  function pulsarClock() {
    if (fase < 4) {
      setFase(fase + 1);
    }
  }

  // Função para resetar o PC para 0
  function resetar() {
    setFase(0);
  }

  // Mensagens de log para ajudar o público a entender o que está rolando
  const descricoesInstrucao = [
    "Processador ocioso. Aguardando o primeiro pulso de clock.",
    "Instrução: lw t0, 0(s1) -> Carregando o primeiro valor da Memória para o registrador t0.",
    "Instrução: lw t1, 4(s1) -> Carregando o segundo valor da Memória para o registrador t1.",
    "Instrução: add t2, t0, t1 -> A ULA somou t0 e t1, guardando o resultado em t2.",
    "Instrução: sw t2, 8(s1) -> Resultado salvo de volta na Memória (fim da execução!)."
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      
      <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>🕹️ Playground RISC-V</h1>
      <p style={{ fontSize: '1.2rem', color: '#34495e', maxWidth: '800px', margin: '0 auto' }}>
        Veja o ciclo de busca e execução em tempo real. Aperte o botão de Clock para avançar o Program Counter (PC) e veja os dados viajando pelos trilhos do sistema!
      </p>

      {/* CONTROLES DE CLOCK */}
      <div style={{ margin: '30px 0' }}>
        <button 
          onClick={pulsarClock}
          disabled={fase === 4}
          style={{ 
            padding: '15px 30px', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '8px', 
            border: 'none', cursor: fase === 4 ? 'not-allowed' : 'pointer', 
            backgroundColor: fase === 4 ? '#95a5a6' : '#e74c3c', color: 'white', marginRight: '15px'
          }}
        >
          ⏱️ Pulsar Clock (Avançar Fase)
        </button>
        
        <button 
          onClick={resetar}
          style={{ padding: '15px 20px', fontSize: '1.2rem', backgroundColor: '#7f8c8d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          🔄 Resetar
        </button>
      </div>

      {/* PAINEL DE INFORMAÇÕES (O Display de 7 Segmentos do nosso simulador) */}
      <div style={{ backgroundColor: '#2c3e50', color: '#2ecc71', padding: '15px', borderRadius: '8px', maxWidth: '800px', margin: '0 auto 40px auto', fontFamily: 'monospace', fontSize: '1.2rem' }}>
        {descricoesInstrucao[fase]}
      </div>

      {/* REPRESENTAÇÃO VISUAL DA ARQUITETURA */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        
        {/* BLOCO DA MEMÓRIA */}
        <div style={{ border: '3px solid #34495e', borderRadius: '10px', padding: '20px', width: '250px', backgroundColor: '#fdfefe' }}>
          <h2 style={{ borderBottom: '2px solid #34495e', paddingBottom: '10px' }}>🗄️ Memória RAM</h2>
          
          <div style={{ backgroundColor: fase === 1 ? '#f1c40f' : '#ecf0f1', padding: '10px', margin: '10px 0', borderRadius: '5px', transition: 'background 0.3s' }}>
            Posição 0 (0x00): <strong>{memoria[0]}</strong>
          </div>
          
          <div style={{ backgroundColor: fase === 2 ? '#f1c40f' : '#ecf0f1', padding: '10px', margin: '10px 0', borderRadius: '5px', transition: 'background 0.3s' }}>
            Posição 1 (0x04): <strong>{memoria[1]}</strong>
          </div>
          
          <div style={{ backgroundColor: fase === 4 ? '#2ecc71' : '#ecf0f1', padding: '10px', margin: '10px 0', borderRadius: '5px', transition: 'background 0.3s' }}>
            Posição 2 (0x08): <strong>{memoria[2]}</strong>
          </div>
        </div>

        {/* BLOCO DA CPU */}
        <div style={{ border: '3px solid #e74c3c', borderRadius: '10px', padding: '20px', width: '350px', backgroundColor: '#fdfefe' }}>
          <h2 style={{ borderBottom: '2px solid #e74c3c', paddingBottom: '10px' }}>🧠 CPU</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            {/* Registradores Base */}
            <div style={{ flex: 1 }}>
              <div style={{ backgroundColor: fase === 1 ? '#3498db' : '#ecf0f1', color: fase === 1 ? 'white' : 'black', padding: '15px', borderRadius: '8px', marginBottom: '10px', transition: 'all 0.3s' }}>
                <small>Reg t0</small><br/>
                <strong style={{ fontSize: '1.5rem' }}>{regT0}</strong>
              </div>
              <div style={{ backgroundColor: fase === 2 ? '#e67e22' : '#ecf0f1', color: fase === 2 ? 'white' : 'black', padding: '15px', borderRadius: '8px', transition: 'all 0.3s' }}>
                <small>Reg t1</small><br/>
                <strong style={{ fontSize: '1.5rem' }}>{regT1}</strong>
              </div>
            </div>

            {/* ULA e Destino */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ backgroundColor: fase === 3 ? '#9b59b6' : '#ecf0f1', color: fase === 3 ? 'white' : 'black', padding: '20px', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px auto', fontWeight: 'bold', transition: 'all 0.3s' }}>
                ULA
              </div>
              <div style={{ backgroundColor: (fase === 3 || fase === 4) ? '#2ecc71' : '#ecf0f1', color: (fase === 3 || fase === 4) ? 'white' : 'black', padding: '15px', borderRadius: '8px', transition: 'all 0.3s' }}>
                <small>Reg t2 (Dest)</small><br/>
                <strong style={{ fontSize: '1.5rem' }}>{regT2}</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}