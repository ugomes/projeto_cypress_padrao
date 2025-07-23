# Projeto Cypress Padrão

Este é um projeto padrão para testes automatizados usando Cypress com configuração personalizada do ESLint.

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd projeto_cypress_padrao
```

2. Instale as dependências:
```bash
npm install
```

## 🛠️ Configuração

### ESLint
O projeto utiliza ESLint v9 com configuração personalizada que inclui:

- **Ambientes suportados**: Browser, Node.js, ES2021
- **Plugins**: ESLint recommended + Cypress recommended
- **Regras personalizadas**:
  - `camelcase`: Obrigatório uso de camelCase
  - `indent`: Indentação de 4 espaços com SwitchCase
  - `quotes`: Aspas simples obrigatórias
  - `space-before-blocks`: Espaço obrigatório antes de blocos
  - `keyword-spacing`: Espaçamento em palavras-chave
  - `lines-around-comment`: Linha antes de comentários
  - `spaced-comment`: Espaço após // ou /*
  - `newline-after-var`: Nova linha após declaração de variáveis
  - `newline-per-chained-call`: Nova linha em chamadas encadeadas
  - `no-multiple-empty-lines`: Máximo 2 linhas vazias
  - `operator-assignment`: Uso obrigatório de operadores de atribuição
  - `space-infix-ops`: Espaço em operadores infixos
  - `space-in-parens`: Controle de espaços em parênteses
  - `arrow-spacing`: Espaçamento em arrow functions

### Cypress
Configurado para testes E2E com suporte completo às melhores práticas.

## 📝 Scripts Disponíveis

```bash
# Executar linting nos arquivos Cypress
npm run lint

# Executar linting com correção automática
npm run lint:fix

# Abrir Cypress (após configurar testes)
npx cypress open

# Executar testes Cypress em modo headless
npx cypress run
```

## 📁 Estrutura do Projeto

```
projeto_cypress_padrao/
├── cypress/
│   ├── e2e/                 # Testes E2E
│   ├── fixtures/            # Dados de teste
│   │   └── example.json
│   └── support/             # Comandos e configurações
│       ├── commands.js
│       └── e2e.js
├── .gitignore              # Arquivos ignorados pelo Git
├── cypress.config.js        # Configuração do Cypress
├── eslint.config.js         # Configuração do ESLint
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Documentação do projeto
```

## 🔧 Configuração do ESLint

O projeto utiliza o formato flat config do ESLint v9 com as seguintes características:

- **Extends**: `eslint:recommended` + `plugin:cypress/recommended`
- **Ambiente**: Browser, Node.js, ES2021
- **Regras personalizadas** para manter consistência no código
- **Suporte completo ao Cypress** com globals e regras específicas

### Exemplo de uso do ESLint:
```bash
# Verificar problemas de linting
npm run lint

# Corrigir automaticamente problemas simples
npm run lint:fix
```

## 🧪 Testes

Para começar a escrever testes:

1. Adicione seus testes na pasta `cypress/e2e/`
2. Use os comandos personalizados em `cypress/support/commands.js`
3. Execute os testes com `npx cypress open` ou `npx cypress run`

## 📦 Dependências

### Dependências de Produção
- `eslint`: ^9.31.0

### Dependências de Desenvolvimento
- `cypress`: ^14.5.2
- `eslint-plugin-cypress`: ^5.1.0

