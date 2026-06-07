# 🚀 Jornada RISC-V: Do Macro ao Micro

Bem-vindo ao repositório do nosso projeto para a **Feira de Extensão**! Este é um site interativo projetado para explicar o funcionamento interno de um computador e a arquitetura **RISC-V** para um público completamente diverso — desde crianças e adolescentes até adultos — utilizando analogias simples do cotidiano e simulações visuais em tempo real.

Se você nunca mexeu com desenvolvimento web ou **React** antes, não se preocupe! Este guia foi feito sob medida para alinhar a nossa bagagem de baixo nível (C/Assembly) com a lógica do desenvolvimento front-end moderno.

---

## 🛠️ Como Rodar o Projeto no seu Computador

Pense no ecossistema do React moderno como um **Makefile altamente automatizado**. Você não precisa compilar arquivos manualmente; um empacotador chamado **Vite** cuida de todo o processo de build e serve a página em tempo real.

### Pré-requisitos
Você precisa ter o **Node.js** instalado na sua máquina (ele vem com o `npm`, o gerenciador de pacotes que baixa as bibliotecas para nós). 

### Passo a Passo no Terminal

1. **Clone o repositório** para a sua máquina e entre na pasta do projeto:
   ```bash
   git clone <url-do-repositorio>
   cd meu-projeto-riscv
   ```

2. **Instale as dependências** (O equivalente a baixar as bibliotecas necessárias):
   ```bash
   npm install
   ```
   *Nota: Isso criará uma pasta chamada `node_modules/`. Ela contém o código físico de todas as ferramentas que usamos. Nunca altere nada lá dentro e deixe que o npm gerencie-a sozinho.*

3. **Inicie o Servidor de Desenvolvimento** (O "Pulsar do Clock" do nosso ambiente de trabalho):
   ```bash
   npm run dev
   ```

4. **Abra o Navegador:**
   O terminal vai indicar um endereço local, geralmente `http://localhost:5173`. Abra esse link no seu navegador.

💡 Deixe esse terminal aberto rodando em segundo plano. Toda vez que você alterar e salvar qualquer arquivo `.jsx`, o Vite percebe a mudança em milissegundos e atualiza o seu navegador de forma automática. Não precisa dar F5! Para desligar o servidor, basta apertar `Ctrl + C` no terminal.

---

## 🗺️ Mapeamento de Arquivos: Do C/Assembly para o Web

Para quem está acostumado com a estrutura clássica de Organização de Computadores, aqui está a tradução exata de onde cada coisa está acontecendo:

* **`index.html` (A Casca):** É o ponto de partida do navegador. Ele contém apenas uma estrutura vazia com uma marcação essencial: `<div id="root"></div>`. É dentro dessa "gaveta" vazia que o React vai injetar toda a nossa interface.
* **`src/main.jsx` (A função `main()`):** O ponto de entrada da execução de software. Esse código roda primeiro, localiza o local `root` no HTML e diz: *"React, inicialize o sistema colocando o componente principal `App` aqui dentro"*. Você raramente precisará mexer nele.
* **`src/App.jsx` (O Controle de Fluxo Geral):** Atua como o nosso menu de controle principal (um bloco `switch-case` baseado em `beq`). Ele gerencia a barra de navegação superior e decide qual módulo deve ser carregado na tela de acordo com o clique do usuário.
* **`src/index.css` (O Painel de Aparência):** Onde definimos os estilos visuais globais. É aqui que mora a nossa classe mágica `.caixa-animada`, responsável por fazer os blocos "flutuarem" e ganharem sombras tridimensionais suaves quando o mouse passa por cima (`:hover`).

---

## 🧩 Estrutura dos Módulos (`src/components/`)

Para manter o projeto modular e limpo, cada seção explicativa foi isolada em seu próprio arquivo dentro da pasta `src/components/`:

### 🍳 Módulo 1: O Macro (A Cozinha) — `Modulo1.jsx`
Apresenta uma analogia simples e visual para introduzir o hardware básico para o público leigo:
- **A Despensa (HD/SSD):** Armazenamento em massa, cabe tudo, mas é lento para buscar.
- **A Bancada (RAM):** Espaço limitado, mas ultrarrápido. Tudo que o Chef vai usar agora precisa estar aqui.
- **O Chef de Cozinha (CPU):** Lê a receita, puxa os ingredientes da bancada e os processa.

### 🗣️ Módulo 2: O Meio-Termo (O Idioma) — `Modulo2.jsx`
Explica o conceito de **ISA (Instruction Set Architecture)** e o papel do compilador. Mostra de forma interativa como uma linha de código em C humana (`int prato = ingredienteA + ingredienteB;`) é triturada e traduzida nas instruções nativas que o chip compreende (como `lw` e `add` do RISC-V).

### ⚙️ Módulo 3: O Micro (As Engrenagens) — `Modulo3.jsx`
Reduz a abstração do hardware. O usuário pode digitar números em campos de texto que simulam dois **Registradores (`t0` e `t1`)** reais e clicar em um botão para disparar uma operação lógica diretamente na **ULA (Unidade Lógica e Aritmética)**, gerando o resultado no registrador de destino (`t2`).

### 🕹️ Módulo 4: Playground RISC-V — `Simulador.jsx`
O grande destaque da nossa bancada na feira. Funciona como uma **Máquina de Estados interativa comandada por pulso de clock**. A cada clique no botão "Pulsar Clock", o usuário avança uma fase do ciclo de instrução e vê graficamente o dado viajar pelos trilhos (barramentos) saindo da RAM, entrando nos registradores da CPU, passando pelo núcleo da ULA e sendo armazenado de volta na memória física.

---

## 🧠 Pequeno Dicionário de Paradigmas

Se você for ler ou sugerir alterações no código, guarde esse paralelo mental:

1. **Componentes são Funções:** No React, cada pedaço da tela é apenas uma função JavaScript que retorna códigos visuais (JSX, que se parece com HTML).
2. **State (`useState`) são os nossos Registradores:** No RISC-V, mudamos o estado do processador gravando dados em registradores. No React, criamos variáveis usando `useState`. Toda vez que você altera essa variável usando a função modificadora dela, o React redesenha a tela de forma reativa para refletir o novo dado.
3. **Eventos (`onClick`, `onChange`) são Interrupções:** Funcionam de maneira análoga às interrupções ou verificações de input por ecall. Quando o usuário clica em um botão ou digita um caractere, uma função de callback é disparada de forma assíncrona para tratar aquela ação específica.
