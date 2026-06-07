// src/components/Modulo1.jsx

export default function Modulo1() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>🍳 A Cozinha do Restaurante (O Macro)</h1>
      <p style={{ fontSize: '1.2rem', color: '#34495e', maxWidth: '600px', margin: '0 auto' }}>
        Antes de mergulharmos nos chips e fios, imagine o computador como uma grande cozinha profissional. Cada parte do hardware tem um papel vital para o prato sair rápido!
      </p>

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
    </div>
  );
}