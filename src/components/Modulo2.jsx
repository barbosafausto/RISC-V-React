import { useState } from 'react';
import "../modulo2.css"


export default function Modulo2() {
  
  // Estado da tradução
  const [traduzido, setTraduzido] = useState(false);

  // Funções de tradução:
  function simularTraducao() {
    setTraduzido(true); 
  }

  function limparTraducao() {
    setTraduzido(false); 
  }

  return (
    <div className='main-div'>
      
      <div className='titulo'>
        <h1>O Livro de Receitas</h1>
        
        <p className='introducao'>
          O Chef de Cozinha (CPU) é incrivelmente rápido, mas ele tem um problema: ele só entende um idioma estranho. Dessa forma, não tem como entregar uma receita escrita em português (ou linguagens de alto nível como C ou Python). É ncessário escrever no idioma dele.
        </p>
      </div>

      {/* Caixa de destaque*/}
      <div style={{ backgroundColor: '#0672d7', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '30px auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#030340' }}>Entra em cena o RISC-V!</h3>
        <p style={{ color: '#022b53' }}>
          O RISC-V é a <strong>Instruction Set Architecture (ISA)</strong>. Pense nele como um <strong>Livro de Receitas</strong> escrito no idioma que o Chef entende. Desse modo, podemos falar: "faça o arroz" ou "pegue tal ingrediente" de modo que ele entenda e consiga fazer a receita.
        </p>
      </div>

      {/* TRADUTOR */}
      <div style={{ border: '2px dashed #7f8c8d', padding: '30px', borderRadius: '10px', marginTop: '40px', backgroundColor: '#fff' }}>
        <h2>Simulador de Tradução</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', alignItems: 'center', marginTop: '20px' }}>
          
          {/* Lado esquerdo - C*/}
          <div style={{ textAlign: 'left', backgroundColor: '#2c3e50', color: '#ecf0f1', padding: '20px', borderRadius: '8px', width: '400px' }}>
            <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #7f8c8d', paddingBottom: '5px' }}>Linguagem Humana (C)</h4>
            <code style={{ fontSize: '1.1rem' }}>
              int prato = ingredienteA + ingredienteB;
            </code>
          </div>

          {/* O Botão de tradução */}
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

          {/* Lado direito - Assembly */}
          <div style={{ textAlign: 'left', backgroundColor: '#000', color: '#2ecc71', padding: '20px', borderRadius: '8px', width: '400px', minHeight: '80px' }}>
            <h4 style={{ margin: '0 0 10px 0', borderBottom: '1px solid #333', paddingBottom: '5px', color: '#bdc3c7' }}>Idioma do Chef (Assembly)</h4>
            
            {!traduzido ? (
              <div style={{ color: '#7f8c8d', fontStyle: 'italic', textAlign: 'center', marginTop: '15px' }}>
                Aguardando código...
              </div>
            ) : (
              <code style={{ fontSize: '1.1rem' }}>
                lw t0, 0(s1)<br/>
                lw t1, 4(s1)<br/>
                add t2, t0, t1 <br />
                sw t2, 0(s2)
              </code>
            )}
          </div>

        </div>
      </div>

      {/*Explicação da ISA*/}
      <div className='exp1-modulo2'>
        <div>
            <h2 style={{textAlign:'center'}}>Instruction Set... O que?</h2>
            <br />
            <p>Assim como humanos possuem línguas diferentes, cada computador foi projetado para receber e interpretar instruções de uma maneira específica. <strong>A maneira que cada computador executa cada comando é baseada na arquitetura do seu conjunto de instruções</strong>, também chamada de ISA.</p>
        </div>
        <div className='exp1-sub-modulo2'>
              <div style={{display:'flex', justifyContent: 'center'}}>
                <img style={{width:'40%'}} src="src/assets/receitas.png" alt="Livro de Receitas" />
              </div>
              <div>
                <br />
                <p><strong>Pense na ISA como sendo um livro de receitas.</strong> Todo cozinheiro é capaz de cozinhar arroz, mas o método que usam para preparar o prato é diferente. Algumas ISAs declaram exatamente qual bocal do fogão a água deve ser fervida e a temperatura exata, enquanto outras exigem um tamanho e formato de panela específica mas apenas falam que o fogo precisa estar no "alto" até ferver. A maneira que cada passo é especificado pode ser diferente, mas o resultado será o mesmo.</p>
                <br />
                <p>A ISA que estamos mostrando é a RISC-V, conhecida por possuir instruções de tamanho reduzido e uniforme. Sua implementação física em um chip também é muito simples e não é necessário pagar taxas de licenciamento para a usar em um produto que você desenvolveu, o que a torna muito popular e versátil.</p>
                <br />
              </div>
        </div>
        <div>
          <p>Como é muito difícil escrever usando esse idioma do computador, escrevemos nossas receitas (códigos) em linguagens mais fáceis - chamamos de linguagem de alto nível - e usamos um tradutor automático, o qual denominamos, por sua vez, como <strong>Compilador</strong>.</p>
        </div>
      </div>

      {/*Explicação do binário*/}
      <div className='exp1-modulo2'>
        <h2 style={{textAlign:'center'}}>E o Binário?</h2>
        <br />
        <p>Você já deve ter ouvido falar que computadores usam apenas 0s e 1s para realizar todas suas operações. Isso se chama <strong>código binário</strong>, e, no fim, as instruções que o computador recebe são assim, realmente composta desses dois números apenas!</p>
        <br />
        <div className='exp1-sub-modulo2'>
          <div>
            <p>Dentro do computador, há uma corrente elétrica passando por seus componentes. <strong>Quando uma corrente alta passa por uma ligação, o computador interpreta esse sinal como "1". Quando uma corrente baixa (ou nenhuma corrente) passa pela mesma conexão, o computador interpreta esse sinal como "0".</strong> Cada instrução em RISC-V requer 32 desses sinais para ser transmitida - Por isso que ela é considerada uma arquitetura de 32 "bits".</p>
            <br />
            <p>Pense que, ao invés de comandos específicos, o Chef recebe um código que descreve a ele o que ele deve fazer. Por exemplo, o primeiro dos 32 sinais pode especificar onde ele deve procurar o próximo instrumento que ele precisa para cozinhar (0 - Gaveta, 1 - Armário) e o segundo sinal se ele deve pegar o instrumento com lâmina ou não (0 - Sem lâmina, 1 - Com lâmina). Juntando esses dois bits, ele pode interpretar a instrução como (00 - Pegue a concha, 01 - Pegue a faca, 10 - Pegue a tigela, 11 - Pegue o liquidificador).</p>
            <br />
            <p>Com 32 bits, temos uma receita!</p>
          </div>
          <div style={{display:'flex', justifyContent:'center', alignItems:'start'}}>
            <img className="imagem-modulo2" src="src/assets/binario.png" alt="Código binário" />
          </div>
        </div>
        <p>Como existe o Compilador para traduzir o código alto nível para as instruções da ISA, existe o <strong>Montador</strong> para traduzir aquelas instruções para sequências binárias</p>
      </div>
    </div>
  );
}