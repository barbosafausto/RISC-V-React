// src/components/Modulo1.jsx
import "../home.css"


export default function Home() {
  return (
    <div className="main-home">
        <div>
            <h1>Bem-vindo ao Restaurante!</h1>
            <br />
            <p>Essa aplicação web é um Recurso Educacional Aberto (REA) para a disciplina de Organização e Arquitetura de Computadores do ICMC, USP, São Carlos. Aqui iremos explicar de modo simples e prático como funciona o computador que você está usando agora para ler essa página (se não estiver usando um celular). <strong>Para ser mais preciso, iremos dissertar sobre a arquitetura RISC-V.</strong></p>
            <p> Primeiramente o que é uma arquitetura? <strong>A arquitetura de um computador é o conjunto de atributos visíveis ao programador.</strong> Ou seja, a ISA (conjunto de instruções), tamanho da palavra, endenreçamento da memória, etc. Enfim, a arquitetura RISC-V se difere das convencionais - como as desenvolvidas pelas Intel - por ser mais simples e padronizado.</p>
            <p>Sabemos que isso tudo é muito abstrato, então vamos fazer a seguinte analogia: <strong>o Computador e a Cozinha de um Restaurante.</strong> Nesse sentido, a arquitetura definiria as receita que o chef (CPU) sabe fazer, o tamanho das panelas, etc. </p>
            <p>A explicação está separada em módulos, cada um descendo mais profundamente no computador. Então, não perca tempo e escolha um dos módulos acima para começar a explorar a Cozinha RISC-V!</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{borderRadius: '10%'}} src="src/assets/cozinha.png" alt="Cozinha da CPU" className="imagem-home" />
        </div>
    </div>
  );
}