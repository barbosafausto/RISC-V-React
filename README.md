# 🚀 Jornada RISC-V: Do Macro ao Micro

Bem-vindo ao repositório do nosso projeto para a **Feira de Extensão**! Este é um site interativo, desenvolvido como um Recurso Educacional Aberto (REA) para a disciplina de Organização e Arquitetura de Computadores do ICMC-USP (São Carlos).

O objetivo é explicar o funcionamento interno de um computador e a arquitetura **RISC-V** para um público completamente diverso — desde crianças e adolescentes até adultos — utilizando analogias simples do cotidiano (como a cozinha de um restaurante) e simulações visuais em tempo real.

Se você nunca mexeu com desenvolvimento web ou **React** antes, não se preocupe! Este guia foi feito sob medida para alinhar a nossa bagagem de baixo nível (C/Assembly) com a lógica do desenvolvimento front-end moderno.


## 🎖️ Autores do Trabalho

* 15512767 - José Fausto Vital Barbosa
* 13678630 - Enzo Key Yamashita
* 16862551 - Eduardo Benedini Bueno
* 15450334 - Erik Min Soo Chung 
* 16816271 - João Pedro Conde Gomes Alves


## 🛠️ Como Rodar o Projeto no seu Computador

Pense no ecossistema do React moderno como um **Makefile altamente automatizado**. Você não precisa compilar arquivos manualmente; um empacotador chamado **Vite** cuida de todo o processo de build e serve a página em tempo real.

### Pré-requisitos
Você precisa ter o **Node.js** instalado na sua máquina (ele vem com o `npm`, o gerenciador de pacotes que baixa as bibliotecas para nós). 

### Passo a Passo no Terminal

1. **Clone o repositório** para a sua máquina e entre na pasta do projeto:
   ```bash
   git clone https://github.com/barbosafausto/RISC-V-React.git
   cd RISC-V-React
   ```

2. **Instale as dependências** (O equivalente a baixar as bibliotecas necessárias):
   ```bash
   npm install
   ```
   *Nota: Isso criará uma pasta chamada `node_modules/`. Ela contém o código físico de todas as ferramentas que usamos. Nunca altere nada lá dentro e deixe que o npm gerencie-a sozinho.*

3. **Inicie o Servidor de Desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra o Navegador:**
   O terminal vai indicar um endereço local, geralmente `http://localhost:5173`. Abra esse link no seu navegador.

💡 Deixe esse terminal aberto rodando em segundo plano. Toda vez que você alterar e salvar qualquer arquivo `.jsx`, o Vite percebe a mudança e atualiza o seu navegador de forma automática. Não precisa dar F5! Para desligar o servidor, basta apertar `Ctrl + C` no terminal.

---

## 🗺️ Mapeamento de Arquivos: Do C/Assembly para o Web

Para quem está acostumado com a estrutura clássica de Organização de Computadores, aqui está a tradução exata de onde cada coisa está acontecendo:

* **`index.html` (A Casca):** É o ponto de partida do navegador. Ele contém apenas uma estrutura vazia com uma marcação essencial: `<div id="root"></div>`. É dentro dessa "gaveta" vazia que o React vai injetar toda a nossa interface.
* **`src/main.jsx` (A função `main()`):** O ponto de entrada da execução de software. Esse código roda primeiro, localiza o local `root` no HTML e diz: *"React, inicialize o sistema colocando o componente principal `App` aqui dentro"*. Você raramente precisará mexer nele.
* **`src/App.jsx` (O Controle de Fluxo Geral):** Atua como o nosso menu de controle principal (um bloco `switch-case` baseado em saltos condicionais). Ele gerencia a barra de navegação superior e decide qual módulo deve ser carregado na tela de acordo com o clique do usuário.
* **`src/index.css` & `src/*.css` (Os Estilos):** Onde definimos as aparências visuais. É onde moram as nossas classes de animação (como a `.caixa-animada`), responsáveis por fazer os elementos da tela reagirem ao mouse.

---

## 🧩 Estrutura dos Módulos (`src/components/`)

Para manter o projeto modular e limpo, garantindo a revelação progressiva do conhecimento ("Do Macro ao Micro"), o site foi dividido em 5 telas encapsuladas em seus próprios arquivos:

### 🏠 Home (`Home.jsx`)
A porta de entrada do projeto. Contextualiza a aplicação web como um material didático da USP e introduz a premissa fundamental: a arquitetura do conjunto de instruções (ISA) sendo explicada através da analogia de um **Computador como a Cozinha de um Restaurante**.

### 🍳 Módulo 1: A Cozinha do Restaurante (`Modulo1.jsx`)
Apresenta o hardware de forma visual e intuitiva para o público leigo:
- **A Despensa (HD/SSD):** Armazenamento em massa, cabe tudo, mas é lento para buscar.
- **A Bancada (RAM):** Espaço limitado, mas ultrarrápido e volátil. 
- **O Chef de Cozinha (CPU):** Unidade essencial que processa tudo.

### 🗣️ Módulo 2: O Livro de Receitas (`Modulo2.jsx`)
Explica o conceito da ISA RISC-V e a conversão para binário. Contém um "Simulador de Tradução" interativo que demonstra o papel do Compilador: transformar uma receita humana (`int prato = ingredienteA + ingredienteB;`) nas instruções nativas do idioma do Chef (`lw`, `add`, `sw`).

### ⚙️ Módulo 3: As Ferramentas (`Modulo3.jsx`)
Reduz a abstração e foca no caminho de dados interno. Explica o papel dos **Registradores** (as tábuas, panelas e potes ultrarrápidos) e inclui uma bancada onde o usuário injeta valores diretamente em `t0` e `t1` para ativar a **ULA (Unidade Lógica e Aritmética)** — o nosso "fogão" — e gerar um resultado em `t2`.

### 🕹️ Módulo 4: Playground RISC-V (`Simulador.jsx`)
O grande destaque da feira. Uma **Máquina de Estados interativa comandada por pulsos de clock**. Ao clicar no botão, o usuário avança o *Program Counter* e acompanha visualmente o caminho dos dados viajando da Memória RAM para os Registradores Base, sendo processados pela ULA e armazenados de volta no destino, fechando o ciclo de instrução.

---

## 🧠 Pequeno Dicionário de Paradigmas

Se você for ler ou sugerir alterações no código, guarde esse `roadmap`:

1. **Componentes são Funções:** No React, cada pedaço da tela (como um módulo inteiro) é apenas uma função JavaScript que retorna códigos visuais (JSX, que lembra o HTML).
2. **State (`useState`) são os nossos Registradores:** No RISC-V, mudamos o estado do processador gravando dados em registradores. No React, criamos variáveis usando `useState`. Toda vez que você altera essa variável através de eventos (como cliques), o React redesenha a tela para refletir o novo dado.
3. **Eventos (`onClick`, `onChange`) são Interrupções:** Funcionam de maneira análoga às interrupções ou tratamentos de entrada (como o `ecall`). Quando o usuário clica em um botão no simulador, uma função é disparada assincronamente para atualizar o estado do sistema.