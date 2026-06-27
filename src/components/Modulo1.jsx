import "../modulo1.css"

export default function Modulo1() {
  return (
    <div className='main-div'>
      <h1>A Cozinha do Restaurante</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
        
          {/* Bloco do HD */}
          <div className="caixa-animada" style={{ padding: '20px', border: '2px solid #bdc3c7', borderRadius: '10px', width: '200px', backgroundColor: '#fff' }}>
            <h2 style={{ fontSize: '3rem', margin: '0' }}>📦</h2>
            <h3>A Despensa (HD/SSD)</h3>
            <p>Onde guardamos todos os ingredientes para o longo prazo. Cabe muita coisa, mas é mais lento de buscar.</p>
          </div>

          {/* Bloco da RAM */}
          <div className="caixa-animada" style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '10px', width: '200px', backgroundColor: '#fff' }}>
            <h2 style={{ fontSize: '3rem', margin: '0' }}>🔪</h2>
            <h3>A Bancada (RAM)</h3>
            <p>Espaço limitado, mas ultrarrápido. Tudo que o Chef vai usar agora mesmo precisa estar aqui.</p>
          </div>

          {/* Bloco da CPU */}
          <div className="caixa-animada" style={{ padding: '20px', border: '2px solid #e74c3c', borderRadius: '10px', width: '200px', backgroundColor: '#fff' }}>
            <h2 style={{ fontSize: '3rem', margin: '0' }}>👨‍🍳</h2>
            <h3>O Chef (CPU)</h3>
            <p>Lê a receita (instruções), pega os ingredientes da bancada e processa tudo na panela (ULA).</p>
          </div>
      </div>

      {/* Bloco explicativo */}
      <div className="exp1-modulo1">
        {/*HD/SSD*/}
        <div style={{paddingRight:'2rem', borderRight:'4px solid #2c3e50'}} className='exp1-coluna-modulo1'>
          <h2 style={{textAlign: 'center'}}>O que é HD/SSD?</h2>
          <br />
          <p>O Hard Disk Drive (HDD) - HD - é um dispositivo composto por diversos discos e cabeçotes. Quando ligado, os discos giram rapidamente e os cabeçotes ficam indo e voltando. De forma magnético, os discos são marcados pelo cabeçote, guardando informações. De modo semelhante, os cabeçotes lêem as informações guardadas. Por outro lado SSD (Solid State Drive) são mais rápido, apesar de menor vida útil. Os SSD's não possuem componentes mecânicos - como discos e cabeçotes -, mas somente blocos de memória flash, fazendo escrita e leitura de forma elétrica. Apesar dessa evolução, a RAM é mais rápida.</p>
          <br />
          <div className='exp1-resumo-modulo1'>
            <p>Em suma, podemos pontuar:</p>
            <ul>
              <li>É <strong>demorado</strong> buscar na despensa;</li>
              <li>Na despensa, <strong>cabe mais</strong> ingredientes;</li>
              <li>Quando o restaurante fecha, os ingredientes <strong>permanecem</strong> na despensa.</li>
            </ul>
          </div>
          
        </div>
        {/*RAM*/}
        <div style={{margin:'1rem', paddingLeft:'2rem'}} className='exp1-coluna-modulo1'>
          <h2 style={{textAlign: 'center'}}>O que é RAM?</h2>
          <br />
          <p>A RAM (Random Acess Memory) é um dos principais componentes do computador. Ela é chamada de memória principal, isso porque tudo que a CPU precisa, tem que estar nela. Além disso, ela pode ser implementada de várias maneiras. A forma mais usual atualmente é DRAM, a RAM dinâmica. Nesse caso, ela é composta por vários capacitores - componentes capazes de armazenar carga - que guardam as informações. Como os capacitores ficam perdendo carga ao passar do tempo, eles tem que ficar sendo energizados. Ou seja, se o computador desligar, os dados são apagados. Os dados escritos e lidos manipulando esses componentes.</p>
          <br />
          <p>Em suma, podemos pontuar:</p>
          <div className='exp1-resumo-modulo1'>
            <ul>
              <li>É <strong>rápido</strong> pegar os ingradientes na bancada;</li>
              <li>Na bancada, <strong>cabe pouca</strong> coisa;</li>
              <li>Quando o restaurante fecha, os ingredientes são <strong>retirados</strong> da bancada.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bloco explicativo da CPU*/}
      <div clasName="exp2-modulo1">
        <div className="exp2-caixa-modulo1">
          <h2 style={{textAlign: 'center'}}>E quem é a CPU?</h2>
          <div className="exp2-caixa-texto-modulo1">
            <div>
              <p>A CPU é um dos componentes mais importantes do computador. Sua principal função é realizar as operações lógicas e aritméticas do computador, operações de controle, e também de salvar informações na memória. Pense nela como um chefe de cozinha. Um restaurante está equipado com vários funcionários, como garçons que recebem, anotam os pedidos dos clientes e entregam a comida; assistentes que levam ingredientes para a cozinha e abrem e fecham o restaurante, entre outras funções. <strong>Porém, sem um cozinheiro, o restaurante não tem como funcionar.</strong> Nenhuma instrução (pedido) é executada e nenhum dos outros trabalhadores consegue fazer o seu trabalho corretamente. Veremos em breve como a CPU realiza essa função e porque o computador não é capaz de funcionar sem ela.</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <img style={{width:'70%'}} src="src/assets/cpu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}