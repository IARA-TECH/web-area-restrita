# Web Área Restrita

Desenvolvimento da **interface web da Área Restrita**, responsável por prover **acesso autenticado, navegação entre módulos internos e visualização de dashboards interativos** integrados ao **Power BI**.

O projeto foi desenvolvido em **React + Vite**, com **componentização modular**, **roteamento SPA (Single Page Application)** e integração com **relatórios externos** via *iframe* seguro.

---

## 📚 Sumário

* [💡 Sobre o Projeto](#-sobre-o-projeto)
* [⚙️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [📁 Estrutura de Pastas](#-estrutura-de-pastas)
* [🧩 Como Executar](#-como-executar)
* [🚀 Build e Deploy](#-build-e-deploy)
* [📊 Módulos Principais](#-módulos-principais)
* [🔒 Boas Práticas e Observações](#-boas-práticas-e-observações)
* [👩‍💻 Autor](#-autor)

---

## 💡 Sobre o Projeto

O **Web Área Restrita** é uma aplicação **frontend** construída com **React** e **Vite**, projetada para ser o **painel restrito** de usuários autenticados da plataforma.

Esta aplicação é responsável por:

* Exibir **páginas internas** (Login, Home, Dashboards, Expotech, etc.);
* Realizar **navegação entre rotas** via `react-router-dom`;
* Incorporar relatórios **Power BI** diretamente no dashboard;
* Exibir menus laterais e controles de sessão através do componente `Sidebar`;
* Servir como **camada de interface** do ecossistema da Área Restrita (conectando-se à API Java/PostgreSQL em outro módulo).

---

## ⚙️ Tecnologias Utilizadas

| Categoria                         | Tecnologias / Ferramentas             |
| --------------------------------- | ------------------------------------- |
| **Linguagem**                     | JavaScript (ES6+)                     |
| **Framework / Bundler**           | React + Vite                          |
| **Roteamento SPA**                | react-router-dom                      |
| **UI Components**                 | JSX + CSS Modules                     |
| **Integrações**                   | Power BI (via `<iframe>`)             |
| **Gerenciamento de Dependências** | npm                                   |
| **Lint / Padronização**           | ESLint                                |
| **Build / Dev Server**            | Vite (`npm run dev`, `npm run build`) |

---

## 📁 Estrutura de Pastas

```
web-area-restrita/
├─ src/
│  ├─ components/
│  │  ├─ Sidebar/        → menu lateral com links e logout
│  │  └─ PowerBI/        → iframe para visualização de relatórios Power BI
│  ├─ pages/
│  │  ├─ Login/          → tela de autenticação de usuário
│  │  ├─ Home/           → página inicial após login
│  │  ├─ Dashboards/     → exibição de dashboards Power BI
│  │  └─ Expotech/       → seção temática ou informativa
│  ├─ App.jsx            → roteamento principal da aplicação
│  └─ main.jsx           → ponto de entrada React/Vite
├─ public/               → ícones, assets e favicon
├─ index.html            → documento base HTML
├─ package.json          → dependências e scripts npm
├─ vite.config.js        → configuração do bundler
├─ .gitignore            → arquivos e pastas ignoradas (ex: node_modules)
└─ LICENSE               → licença MIT
```

---

## 🧩 Como Executar

### 🧱 Executando Localmente

```bash
# Clone o repositório
git clone https://github.com/IARA-TECH/web-area-restrita.git

# Acesse o diretório
cd web-area-restrita

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em:
👉 [http://localhost:5173](http://localhost:5173)

---

### 🐳 Usando Docker (opcional)

```bash
# Crie a imagem
docker build -t web-area-restrita .

# Execute o container
docker run -p 8080:80 web-area-restrita
```

Acesse em: [http://localhost:8080](http://localhost:8080)

---

## 🚀 Build e Deploy

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos finais estarão em `/dist` — prontos para deploy em qualquer **servidor estático**
(ex: **Vercel**, **Netlify**, **GitHub Pages**, **nginx**, etc.).

---

## 📊 Módulos Principais

| Módulo / Página | Descrição                                                               |
| --------------- | ----------------------------------------------------------------------- |
| **Login**       | Página de autenticação, redireciona para o painel após sucesso.         |
| **Home**        | Página inicial, apresenta informações gerais ao usuário.                |
| **Dashboards**  | Página de visualização do relatório **Power BI** integrado via iframe.  |
| **Expotech**    | Página adicional de conteúdo informativo ou institucional.              |
| **Sidebar**     | Componente lateral de navegação (links + logout).                       |
| **PowerBI**     | Componente que exibe relatórios externos hospedados no portal Power BI. |

---

## 👩‍💻 Autor

**IARA Tech**

Projeto interdisciplinar desenvolvido por alunos do **Instituto J&F**, como parte do ecossistema de soluções **IARA**, voltado à **automação de processos e visualização de dados corporativos**.

📍 São Paulo, Brasil
📧 [iaratech.oficial@gmail.com](mailto:iaratech.oficial@gmail.com)
🌐 GitHub: [https://github.com/IARA-TECH](https://github.com/IARA-TECH)

---
