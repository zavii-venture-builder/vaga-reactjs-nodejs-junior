# 🛍️ Teste Tecnico / Sistema de Cadastro de Produtos - Zavii

Um sistema completo para gerenciamento de produtos desenvolvido com React.js + Vite no frontend e Node.js com Fastify no backend.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Decisões Técnicas](#-decisões-técnicas)

## 🎯 Visão Geral

Projeto de teste tecnico para implementa um sistema de cadastro de produtos com interface web moderna e API RESTful. O sistema permite cadastrar produtos com nome, preço e quantidade em estoque, além de listar todos os produtos cadastrados.

### Principais Características

- **Interface Responsiva**: Design moderno que funciona em desktop e mobile
- **Validação Robusta**: Validação tanto no frontend quanto no backend
- **Feedback Visual**: Alertas e estados de loading para melhor UX
- **Arquitetura Limpa**: Separação clara entre frontend e backend
- **Código Organizado**: Estrutura modular e bem documentada

## ✨ Funcionalidades

### Frontend
- ✅ Cadastro de produtos com formulário validado
- ✅ Listagem de produtos em cards visuais
- ✅ Navegação por abas (Cadastro/Listagem)
- ✅ Estados de loading e tratamento de erros
- ✅ Design responsivo para mobile e desktop
- ✅ Indicadores visuais de estoque (Em estoque/Baixo/Sem estoque)
- ✅ Formatação automática de preços em Real (R$)
- ✅ Feedback visual para operações (sucesso/erro)

### Backend
- ✅ API RESTful com Fastify
- ✅ CRUD completo de produtos
- ✅ Validação de dados de entrada
- ✅ Tratamento de erros padronizado
- ✅ Armazenamento em memória
- ✅ CORS configurado para desenvolvimento
- ✅ Logs estruturados
- ✅ Documentação de endpoints

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **Vite** - Build tool e dev server
- **CSS3** - Estilização com CSS moderno (Grid, Flexbox, Custom Properties)
- **Context API** - Gerenciamento de estado
- **Fetch API** - Comunicação com backend

### Backend
- **Node.js** - Runtime JavaScript
- **Fastify** - Framework web rápido e eficiente
- **@fastify/cors** - Middleware para CORS
- **ES Modules** - Módulos JavaScript modernos

### Ferramentas de Desenvolvimento
- **npm** - Gerenciador de pacotes
- **Git** - Controle de versão

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** (geralmente vem com Node.js)
- **Git** (para clonar o repositório)

Verifique as versões instaladas:
```bash
node --version
npm --version
git --version
```

## 🛠️ Instalação e Configuração


### 2. Configurar o Backend

```bash
# Navegar para pasta do backend
cd backend

# Instalar dependências do Node /package.json
npm install

```

### 3. Configurar o Frontend

```bash
# Navegar para pasta do frontend (em nova aba do terminal)
cd frontend

# Instalar as dependencias do Vite e React /package.json
npm install

```

## ▶️ Como Executar

### Executar o Backend

```bash
# Na pasta backend/
cd backend

# Iniciar servidor em modo desenvolvimento
npm run dev

# Ou iniciar servidor em modo produção
npm start
```

O backend estará disponível em: `http://localhost:3000`

### Executar o Frontend

```bash
# Em novo terminal, na pasta frontend/
cd frontend

# Iniciar servidor de desenvolvimento
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

### Verificar se está funcionando

1. Acesse `http://localhost:5173` no navegador
2. Teste o cadastro de um produto
3. Verifique se o produto aparece na lista
4. Acesse `http://localhost:3000/health` para verificar o backend

## 📁 Estrutura do Projeto

```
sistema-cadastro-produtos/
├── backend/                          # API Node.js
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ProductController.js   # Lógica de negócio
│   │   ├── models/
│   │   │   └── Product.js            # Modelo de dados
│   │   ├── routes/
│   │   │   └── productRoutes.js      # Definição das rotas
│   │   └── utils/                    # Utilitários
│   ├── server.js                     # Servidor principal
│   └── package.json                  # Dependências backend
│
├── frontend/                         # Aplicação React
│   ├── public/
│   │   └── vite.svg                  # Favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx            # Cabeçalho da aplicação
│   │   │   ├── ProductForm.jsx       # Formulário de cadastro
│   │   │   ├── ProductList.jsx       # Lista de produtos
│   │   │   └── ProductCard.jsx       # Card individual do produto
│   │   ├── context/
│   │   │   └── ProductContext.jsx    # Context API para estado
│   │   ├── services/
│   │   │   └── productService.js     # Comunicação com API
│   │   ├── styles/
│   │   │   ├── global.css            # Estilos globais
│   │   │   └── App.css               # Estilos componentes
│   │   ├── App.jsx                   # Componente principal
│   │   └── main.jsx                  # Ponto de entrada
│   ├── index.html                    # HTML base
│   ├── vite.config.js               # Configuração Vite
│   └── package.json                 # Dependências frontend
│
└── README.md                        # Este arquivo
```

## 🔗 API Endpoints

### Base URL: `http://localhost:3000/api`

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `GET` | `/health` | Health check do servidor | - |
| `GET` | `/products` | Listar todos os produtos | - |
| `GET` | `/products/:id` | Buscar produto por ID | - |
| `POST` | `/products` | Criar novo produto | `{ name, price, quantity }` |
| `PUT` | `/products/:id` | Atualizar produto | `{ name, price, quantity }` |
| `DELETE` | `/products/:id` | Deletar produto | - |

### Exemplos de Uso

#### Criar Produto
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Smartphone", "price": 899.99, "quantity": 10}'
```

#### Listar Produtos
```bash
curl http://localhost:3000/api/products
```

### Formato de Resposta

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Smartphone",
    "price": 899.99,
    "quantity": 10,
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Tratamento de Erros

```json
{
  "success": false,
  "message": "Dados inválidos",
  "errors": ["Nome é obrigatório", "Preço deve ser maior que zero"]
}
```

## 🏗️ Decisões Técnicas

### Frontend

**React com Hooks**: Escolhido pela simplicidade e performance. Context API para gerenciamento de estado global sem dependências externas.

**Vite**: Build tool moderno que oferece desenvolvimento mais rápido que Create React App, com HMR instantâneo.

**CSS Puro**: Evitamos bibliotecas CSS para demonstrar conhecimento de CSS moderno (Grid, Flexbox, Custom Properties).

**Fetch API**: API nativa do navegador, sem necessidade de bibliotecas externas como Axios.

### Backend

**Fastify**: Framework escolhido por ser mais performático que Express, com validação integrada e TypeScript-ready.

**ES Modules**: Sintaxe moderna de módulos JavaScript para melhor organização e performance.

**Validação Dupla**: Validação tanto no Fastify (schema) quanto no controller para máxima segurança.

**Armazenamento em Memória**: Array JavaScript simples conforme solicitado, fácil de evoluir para banco de dados.

### Arquitetura

**Separação de Responsabilidades**: 
- Models: Definição e validação de dados
- Controllers: Lógica de negócio
- Routes: Definição de endpoints
- Services: Comunicação com API


## 🆘 Resolução de Problemas

### Backend não inicia
```bash
# Verificar se Node.js está instalado
node --version

# Verificar se dependências estão instaladas
npm list

# Reinstalar dependências
npm install
```

### Frontend não carrega
```bash
# Verificar se backend está rodando
curl http://localhost:3000/health

# Limpar cache do Vite
npm run dev -- --force
```

### Erro de CORS
- Verifique se o backend está configurado para aceitar requisições do frontend
- URL do frontend deve estar na whitelist do CORS

### Produtos não aparecem
1. Verifique se backend está rodando na porta 3000
2. Abra Network tab no DevTools para ver requisições
3. Verifique console para erros JavaScript


## 👨‍💻 Autor

**Danillo Acassio V. Targino**

*Data: 12/09/2025*

*Time/media: 3 hrs*

- Auxilio da IA (Deepseek) nas correções dos testes Back-to-Front, parte das construções na codificação do Designer/Styles-css e concepção do context da aplicação.

- GitHub: [@KnightCapivara](https://github.com/KnightCapivara)
- LinkedIn: [Danillo Acassio](https://www.linkedin.com/in/knightcapivara)
- Email: danillo.targino@gmail.com
---