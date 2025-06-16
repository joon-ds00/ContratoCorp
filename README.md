# ContratoCorp™️

**Sistema de Gestão de Contratos com Foco em Compliance e Automação**

ContratoCorp™️ é um sistema web desenvolvido para facilitar o gerenciamento de contratos jurídicos com visual profissional, integração com APIs públicas e recursos para exportação e futura assinatura digital.

---

## 🎯 Objetivo

Oferecer uma solução moderna e funcional para empresas que precisam:

- Centralizar e visualizar seus contratos
- Gerar contratos automaticamente com base em dados públicos (como CNPJ)
- Exportar contratos em PDF
- Utilizar um sistema responsivo, com interface elegante e modo escuro

---

## 🛠️ Funcionalidades

✔️ Modo escuro ativo por padrão  
✔️ Interface moderna com animações e feedback visual  
✔️ Página de login personalizada  
✔️ Painel de contratos (visualização e organização)  
✔️ Gerador automático de contratos com preenchimento dinâmico  
✔️ Integração com a API ReceitaWS para consulta de CNPJ  
✔️ Exportação de contratos para PDF  
✔️ Estrutura modular (HTML, CSS, JS, Backend Express)  
✔️ Layout responsivo para desktop e mobile

---

## 🧠 Estrutura do Projeto

ContratoCorp/
├── index.html # Página principal com modo escuro
├── login.html # Tela de login personalizada
├── contratos.html # Visualização e gerenciamento de contratos
├── gerar-contrato.html # Gerador automático de contratos
├── style.css # Tema visual corporativo (modo escuro)
├── script.js # Comportamento dinâmico da interface
├── server.js # Backend Node.js + Express
└── assets/
└── logo.png # Logo personalizada da aplicação

---

## 📦 Tecnologias Utilizadas

- HTML5 / CSS3 / JavaScript
- Node.js + Express.js
- API Pública: ReceitaWS
- Biblioteca PDF: html2pdf.js
- Git & GitHub

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/joon-ds00/ContratoCorp.git
   
npm install

node server.js

Acesse em: http://localhost:3000
