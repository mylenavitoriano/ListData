<h1 align="center"> List.Data </h1>

<p align="center">
    Teste Técnico Front-End
<br/>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

<p align="center">
  <img alt="projeto List.Data" src=".github/preview.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Next.js 14
- Typescript
- Tailwind
- Shadcn
- React Hook Form
- TanStack Table

## 💻 Projeto

O List.Data é uma aplicação web que permite visualizar, adicionar, editar e excluir usuários de maneira fácil e organizada. Os dados são carregados automaticamente e exibidos de forma clara, com páginas para facilitar a navegação. A interface é moderna e se adapta bem a qualquer dispositivo, proporcionando uma boa experiência tanto no computador quanto no celular.

Você pode acessar o projeto online através da URL [https://list-data-frontend.vercel.app/](https://list-data-frontend.vercel.app/)

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/design/kKPDADBlNAuNA4Jb6kuy6B/List.Data?node-id=0-1&t=vj7iHEyRXblANSQc-1).

## 🏗️ Decisões Arquiteturais

O List.Data foi desenvolvido com foco em simplicidade, escalabilidade e boas práticas de organização de código. Abaixo estão algumas das principais decisões arquiteturais tomadas:

- Next.js 14 com Server Components: Optei por usar Next.js com os recursos do Server Components, o que proporciona uma melhor performance ao carregar os dados da API diretamente no servidor, reduzindo a carga no cliente.

- TypeScript: A escolha do TypeScript garante maior segurança de tipo e facilita o desenvolvimento, evitando erros comuns no código.

- Organização por Pastas Funcionais: A estrutura de pastas foi pensada para ser clara e escalável, separando ações (como interações com a API), hooks personalizados, componentes reutilizáveis e páginas específicas de criação e edição de usuários.

- React Hook Form: Utilizei o React Hook Form para gerenciar os formulários de criação e edição de usuários. Ele simplifica o gerenciamento de estados e validações, proporcionando uma melhor experiência de desenvolvimento.

- Tailwind CSS: A escolha do Tailwind CSS visa facilitar a criação de layouts responsivos e de fácil manutenção, mantendo o código limpo e otimizado.

- Design System: Seguindo um design system básico, consegui garantir uma interface consistente, reutilizando componentes como botões, inputs e tabelas de forma modular e reutilizável.

## 📂 Estrutura

```bash
src/
src/
├── actions         # Funções responsáveis por interagir com a API
├── app             # Páginas e configurações das telas
│   ├── new         # Tela de cadastro de usuário
│   └── edit        # Tela de edição de usuário
├── components      # Componentes reutilizáveis ou específicos do projeto
├── hooks           # Hooks personalizados para encapsular lógica reutilizável
├── lib             # Configurações de bibliotecas vinculadas ao projeto
├── provider        # Providers de bibliotecas e contextos utilizados
├── types           # Tipagens dos dados utilizados no projeto
```

## 📌 Instruções

```bash
# Clonar o repositório
git clone https://github.com/mylenavitoriano/ListData.git

# Entrar no diretório
cd ListData

# Baixar as dependências (npm || yarn)
npm install
yarn

# Executar a aplicação (npm || yarn)
npm run dev
yarn dev
```
