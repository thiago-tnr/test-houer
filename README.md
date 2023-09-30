# Teste Houer - inscriçao em vaga

![Logo](logo.png)

**Gerencie Usuários e Vagas de Emprego com Facilidade**

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
  - [Construído Com](#construído-com)
- [Início Rápido](#início-rápido)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Uso](#uso)
- [Rotas e Autenticação](#rotas-e-autenticação)
- [Licença](#licença)

## Sobre o Projeto

Essa é uma aplicação em que um usuário pode se increver em uma vaga de trabalho, em que apendas usuários administradores podem executar ações quanto a vaga

### Construído Com

- Docker
- Node.js
- Express.js
- Prisma
- Jest
- JWT (Tokens JSON Web)

## Início Rápido

Para iniciar a aplicação, siga as etapas abaixo.

### Pré-requisitos

Certifique-se de ter os seguintes pré-requisitos instalados em sua máquina:

- Docker

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/thiago-tnr/test-houer.git

2. **Navegue até o diretório do projeto:**

   ```bash
   cd houer
   ```

3. **Conceda permissão de execução ao script de inicialização, rode no terminal o comando:**

   ```bash
   chmod +x .docker/start.sh
   ```
## Uso

Agora que você configurou o projeto, pode iniciar a aplicação seguindo estas etapas:

1. **Execute o Docker Compose para iniciar o servidor e o banco de dados:**

   ```bash
   docker-compose up -d
   ```

   Isso iniciará a aplicação em segundo plano.

2. **Entre dentro do terminal do container para executar tudo em um ambiente isolado:**

   ```bash
   docker-compose exec app bash
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Rotas e Autenticação

- A rota para criar, atualizar e excluir vagas de emprego está disponível apenas para usuários administradores (admin).

- Qualquer usuário autenticado pode listar uma vaga de emprego por ID ou todas as vagas disponíveis.

- Os usuários precisam estar logados para realizar ações nas rotas de usuário, exceto para criar novos usuários.

## Licença

Distribuído sob a Licença MIT. Consulte `LICENSE` para obter mais informações.

```

Este é o README completo em português formatado para o GitHub. Certifique-se de personalizar as seções, URLs e informações de contato de acordo com o seu projeto específico. Você também pode adicionar seções adicionais, como "Recursos" ou "Agradecimentos", conforme necessário.
