// src/components/Modulo2.jsx

// 1. IMPORTAÇÕES:
// O 'useState' é a ferramenta mais importante do React.
// Ele serve para criar variáveis que, quando alteradas, avisam a tela 
// para se "redesenhar" automaticamente com os novos valores.
import { useState } from 'react';

// 2. DECLARAÇÃO DO COMPONENTE:
// Em React, um componente é apenas uma função JavaScript que retorna a interface (JSX).
// O 'export default' permite que o seu App.jsx consiga importar este arquivo.
export default function Modulo2() {
  
  // 3. ESTADO (STATE):
  // Aqui estamos criando uma variável chamada 'traduzido' (que começa como false).
  // A função 'setTraduzido' é a ÚNICA forma permitida de alterar essa variável.
  // Pense nisso como um registrador: você não muda o valor diretamente,
  // você usa uma instrução (setTraduzido) para gravar o novo valor nele.
  const [traduzido, setTraduzido] = useState(false);

  // 4. FUNÇÕES DE AÇÃO:
  // Estas funções serão disparadas quando o usuário clicar nos botões.
  function simularTraducao() {
    setTraduzido(true); // Muda o estado para verdadeiro, forçando a tela a atualizar
  }

  function limparTraducao() {
    setTraduzido(false); // Retorna ao estado inicial
  }

  // 5. O RETORNO (A Interface):
  // Tudo que está dentro do 'return()' é o que vai aparecer na tela.
  // Usamos pares de tags semelhantes ao HTML, mas podemos injetar 
  // lógica JavaScript dentro delas usando chaves { }.
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      
      <h1 style={{ fontSize: '2.5rem', color: '#2c3e50' }}>🗣️ O Idioma e o Garçom (O Meio-Termo)</h1>
      
      <p style={{ fontSize: '1.2rem', color: '#34495e', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
        O Chef de Cozinha (CPU) é incrivelmente rápido, mas ele tem um problema: ele só entende um idioma muito primitivo de botões e engrenagens. 
        Não adianta entregar uma receita escrita em Português ou em linguagens como Python e C. Precisamos de um <strong>padrão de tradução</strong>.
      </p>

      {/* Caixa de destaque explicando o RISC-V */}
      <div style={{ backgroundColor: '#0672d7', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '30px auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#030340' }}>⭐ Entra em cena o RISC-V!</h3>
        <p style={{ margin: '0', color: '#022b53' }}>
          O RISC-V é a <strong>Instruction Set Architecture (ISA)</strong>. Pense nele como o "Esperanto" dos computadores: um manual aberto e gratuito que diz exatamente quais palavras o Chef consegue entender (como "SOME", "CARREGUE", "PULE").
        </p>
      </div>

      {/* Área interativa para o público da feira brincar */}
      <div style={{ border: '2px dashed #7f8c8d', padding: '30px', borderRadius: '10px', marginTop: '40px', backgroundColor: '#fff' }}>
        <h2>Simulador de Tradução (O Compilador)</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', alignItems: 'center', marginTop: '20px' }}>
          
          {/* Lado Esquerdo: Código Humano */}
          <div style={{ textAlign: 'left', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px', borderRadius: '8px', width: '250px' }}>
            <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #7f8c8d', paddingBottom: '5px' }}>Linguagem Humana (C)</h4>
            <code style={{ fontSize: '1.1rem' }}>
              int prato =<br/>
              ingredienteA + ingredienteB;
            </code>
          </div>

          {/* O Botão de Ação */}
          {/* O 'onClick' funciona como um listener de interrupção de hardware. 
              Quando o clique acontece, ele dispara a função associada. */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              onClick={simularTraducao}
              style={{ padding: '15px 20px', fontSize: '1.1rem', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Traduzir ➔
            </button>
            
            {/* Renderização Condicional: O botão de limpar só aparece SE 'traduzido' for true */}
            {traduzido && (
              <button 
                onClick={limparTraducao}
                style={{ padding: '8px 15px', fontSize: '0.9rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
              >
                Resetar
              </button>
            )}
          </div>

          {/* Lado Direito: Código de Máquina (Assembly) */}
          {/* Aqui usamos renderização condicional pesada. 
              Se 'traduzido' for falso, mostramos pontos de interrogação. 
              Se for verdadeiro, mostramos o Assembly. */}
          <div style={{ textAlign: 'left', backgroundColor: '#000', color: '#2ecc71', padding: '20px', borderRadius: '8px', width: '250px', minHeight: '80px' }}>
            <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #333', paddingBottom: '5px', color: '#bdc3c7' }}>Idioma do Chef (Assembly)</h4>
            
            {!traduzido ? (
              <div style={{ color: '#7f8c8d', fontStyle: 'italic', textAlign: 'center', marginTop: '15px' }}>
                Aguardando código...
              </div>
            ) : (
              <code style={{ fontSize: '1.1rem' }}>
                lw t0, 0(s1)<br/>
                lw t1, 4(s1)<br/>
                add t2, t0, t1
              </code>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}