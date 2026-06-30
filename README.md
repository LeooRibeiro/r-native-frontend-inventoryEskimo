# 📦 Inventory Manager

Sistema de gerenciamento de estoque desenvolvido com foco em arquitetura escalável, boas práticas de desenvolvimento e experiência mobile.

O projeto tem como objetivo controlar o fluxo de produtos entre diferentes setores, seguindo o fluxo de empresa -> caminhão -. loja

---

## 🚀 Tecnologias

### Mobile
- React Native
- TypeScript
- Expo

### Backend
- Node.js
- Express
- TypeScript

### Banco de Dados
- PostgreSQL
- Prisma ORM

---

## 📱 Funcionalidades

- Controle de estoque
- Entrada de produtos
- Saída de produtos
- Transferência entre setores
- Validação para impedir estoque negativo
- Consulta rápida de estoque
- Geração de documentos

---

## 🏗 Arquitetura

O backend segue uma arquitetura em camadas:

```
Controller
     │
     ▼
Service
     │
     ▼
Repository
     │
     ▼
Database (PostgreSQL)
```

Cada camada possui responsabilidades bem definidas:

- **Controller** → Recebe as requisições HTTP.
- **Service** → Contém as regras de negócio.
- **Repository** → Responsável pela comunicação com o banco.
- **Database** → Persistência dos dados.

---

## 🔄 Fluxo de Estoque

```
   Empresa
      │
      ▼
     Loja
      │
      ▼
   Estoque
      │
      ├────────► Loja
      │
      └────────► Câmara Fria
```

Toda movimentação gera um registro no histórico, podendo ser vista atravez da geração de documentos.

---

## 🔒 Regras de Negócio

- Não permitir estoque negativo.
- Produtos inexistentes não podem receber movimentações.
- Atualização automática da quantidade em estoque.
- Histórico imutável das movimentações.

---

## 🌐 API REST

### Produtos

```
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
```
---

## 📈 Roadmap

- [x] Prototipo do projeto
- [x] Arquitetura
- [x] Criação do ambiente PostgreeSQL/Node inicial
- [ ] Criação do ambiente front-end inicial
- [ ] Dashboard
- [ ] Exportação de relatórios
- [ ] Notificações
- [ ] Testes automatizados

---

## 🎯 Objetivo

Este projeto foi desenvolvido com motivação para resolver um problema de lojas locais da cidade e como aprendizado para aplicação de boas práticas no desenvolvimento Full Stack Mobile, utilizando uma arquitetura escalável e tecnologias amplamente utilizadas no mercado.

---

## 👨‍💻 Desenvolvedor

**Leonardo Cassemiro Ribeiro**

Projeto desenvolvido para fins de estudo, evolução profissional e portfólio.
