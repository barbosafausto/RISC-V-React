import { useState } from 'react';
import "../modulo3.css"

export default function Modulo3() {
  // ESTADOS PARA OS REGISTRADORES
  const [regA, setRegA] = useState(0);
  const [regB, setRegB] = useState(0);
  
  // E um estado para guardar o resultado que sai da ULA
  const [resultado, setResultado] = useState(null);

  // FUNÇÃO DA ULA
  function processarNaULA() {
    const soma = Number(regA) + Number(regB);
    setResultado(soma);
  }

  return (
    <div className='main-div'>
     
      <div className='titulo'>
        <h1>As Ferramentas</h1>
      
        <p className='introducao'>
          Lá no fundo, a CPU é um monte de fios - ou melhor barramentos - ligando diversos componentes para transmissão dos dados em binário. Dentre esses componentes, os registradores e a ULA se destacam. 
        </p>
      </div>

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

      <div className="exp1-modulo3">
        <div>
          <h2 style={{textAlign:'center'}}>REGISTRADORES</h2>
          <br />
          <p><strong>Registradores são mecanismos muito rápidos de armazenamento bem próximos da CPU  e bem pequenos</strong> (sendo muito mais rápido do que a RAM). No RISC-V, tudo que o Chef for usar tem que estar nos registradores. Então, se for usar algo da RAM, primeiro se deve carregar o dado em um registrador. Para escrever algo na memória, o processo é o mesmo.</p>
          <br/>
          <p>Além disso, cada registrador tem uma certa função dentro da arquitetura. Desse modo, podemos pensar que determinados registradores são como tábuas de cortar, guardando os ingredientes temporariamente para o processamento. Outros poderiam ser associados à panela, enviando argumentos para outra função (o fogão). E ainda seria possível comparar alguns com potes, que guardam os alimentos de forma segura e por tempo indefinido.</p>
        </div>
        <div>
          <img src='src/assets/panela.png' alt='Panela'/>
        </div>
      </div>
      <div style={{textAlign:'justify'}}>
        <div style={{margin:'1rem'}}>
          <h2 style={{textAlign:'start'}}>ULA</h2>
          <br />
          <p>Finalmente, a Unidade Lógica Aritmética, a famosa ULA ou ALU. Lá é onde são feitas - como o próprio nome já diz - as operações lógicas e aritméticas do computador, isto é, <strong>a manipulação dos bits de entrada para gerar bits de resultado na saída </strong>. Por exemplo, pode-se fazer uma soma entre dois registradores - como ilustrado, ou verificar se um deles é igual a zero. Para fazer isso, a ULA é formada por diversos circuitos que conseguem por meio de uma lógica realizar as operações desejadas.</p>
          <br />
          <p>Na nossa analogia, um dos componentes internos da ULA poderia ser o fogão. Lá colocamos os ingredientes (dados), processamos eles, seja fritando ou cozinhando, e, por fim, temos um delicioso prato! Outro poderia ser o liquidificador, ou até mesmo a airfryer.</p>
        </div>
      </div>
    </div>
  );
}