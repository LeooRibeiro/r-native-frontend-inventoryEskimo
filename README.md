# 📦 Sistema de Gerenciamento de Estoque - Mobile App

Aplicativo mobile desenvolvido com React Native para gerenciamento de estoque, movimentações de produtos e controle operacional entre caminhão, estoque e loja.

Este projeto faz parte do **Protocolo 0100**, utilizando uma arquitetura moderna baseada em:

* React Native
* TypeScript
* Expo
* React Navigation
* Node.js + Express (API separada)
* PostgreSQL
* Prisma ORM

---

# 📋 Visão Geral

O objetivo da aplicação é fornecer uma solução simples, rápida e escalável para controle de estoque em dispositivos móveis.

O fluxo principal da aplicação é:

```text
Caminhão (gerenciado pela fabrica)
    ↓
Estoque (gerenciado pelo app)
    ↓
Loja (gerenciado pelo app)
```

---

# 🚀 Tecnologias Utilizadas

## Mobile

* React Native
* Expo
* TypeScript
* React Navigation
* React Hook Form
* Context API

## Backend

Este projeto consome uma API independente desenvolvida em:

* Node.js
* Express
* TypeScript
* PostgreSQL
* Prisma ORM

---

# 🔄 Fluxo de Negócio

## Produtos cadastrados

Permite gerenciar a quantidade de produtos disponíveis para movimentação.

Informações básicas:

* Nome
* Código
* Quantidade
* Data de validade

## Movimentações

Cada alteração no estoque gera automaticamente um registro de movimentação.

Tipos suportados:

* Entrada
* Saída
* Transferência

Informações registradas:

* Produto
* Quantidade
* Tipo da movimentação
* Data

---

# 🔗 Integração com API

A comunicação com o backend é realizada através do Axios.

Exemplo:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://SEU_IP:3000",
});
```

---

# ⚙️ Instalação

## Clonar o repositório

```bash
git clone https://github.com/seu-usuario/estoque-mobile.git
```

```bash
cd estoque-mobile
```

## Instalar dependências

```bash
npm install
```

ou

```bash
yarn
```

## Executar o projeto

```bash
npx expo start
```

---

# 🌎 Configuração da API

Crie um arquivo `.env` na raiz do projeto:

```env
EXPO_PUBLIC_API_URL=http://192.168.0.100:3000
```

---

# 📱 MVP v1

Funcionalidades previstas para a primeira versão (Em criação):

* Listagem de produtos
* Consulta de estoque
* Entrada de estoque
* Saída de estoque
* Histórico de movimentações
* Integração com API REST

---

# 🔒 Regras de Negócio

* Não permitir estoque negativo.
* Toda movimentação deve ser registrada.
* Quantidades devem ser validadas antes do envio.
* Produtos inexistentes não podem ser movimentados.
* O aplicativo deve refletir sempre o estado atual do estoque armazenado na API.

---

# 🏗️ Arquitetura

A aplicação segue princípios de separação de responsabilidades:

```text
Screens
    ↓
Services
    ↓
API REST
    ↓
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

---

# 📈 Evolução Futura

Funcionalidades planejadas:

* Autenticação JWT
* Controle de usuários
* Controle de permissões
* Scanner de código de barras
* Dashboard gerencial
* Relatórios PDF
* Modo offline
* Sincronização automática
* Notificações em tempo real

---

# 👨‍💻 Autor

**Leonardo Cassemiro Ribeiro**

Projeto criado para estudos, evolução profissional e aplicação prática de arquitetura mobile integrada com APIs modernas.
