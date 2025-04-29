# TaskFlow

## Descrição do Projeto
TaskFlow é uma aplicação de gestão corporativa de tarefas que integra um **Back-end** em **.NET 8** com **Entity Framework Core** e **MySQL**, e um **Front-end** em **Angular 17**, oferecendo uma solução completa para criação, acompanhamento, atualização e exclusão de tarefas de forma ágil e segura.

## Funcionalidades Principais
- **CRUD de Tarefas**: endpoints RESTful para criação, leitura, atualização e exclusão de tarefas.
- **Gerenciamento de Usuários**: cadastro e autenticação de usuários com permissões personalizadas.
- **Documentação de API**: interface interativa gerada pelo Swagger UI para exploração e testes.
- **Migrações Automáticas**: pipeline de migrações com EF Core para versionamento e evolução do esquema do banco de dados.
- **Interface Responsiva**: dashboard em Angular com componentes reutilizáveis e Hot Reload.

## Arquitetura e Tecnologias
- **Back-end**: .NET 8, C#, ASP.NET Core Web API.
- **ORM**: Entity Framework Core (Pomelo MySQL Provider).
- **Documentação**: Swashbuckle.AspNetCore (Swagger/OpenAPI).
- **Front-end**: Angular 17, TypeScript, HTML5, CSS3.
- **Banco de Dados**: MySQL Server 8.x.

## Pré-requisitos
- **Node.js** (>= 22.x) e **npm**.
- **Angular CLI** (17.x) instalado globalmente: `npm install -g @angular/cli`.
- **.NET 8 SDK**.
- **MySQL Server** (>= 8.0).

## Configuração e Instalação

### Back-end
1. Clone o repositório e acesse a pasta do Back-end:
   ```bash
   git clone https://github.com/PedroDeMiranda/TaskFlow.git
   cd TaskFlow/BackEnd/Back-End
   ```
2. Ajuste a connection string no arquivo `appsettings.Development.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=TaskFlow;User=seu_usuario;Password=sua_senha;"
   }
   ```
3. Instale dependências e execute as migrações:
   ```bash
   dotnet restore
   dotnet ef database update
   ```
4. Inicie a API:
   ```bash
   dotnet run
   ```
5. Acesse a documentação em: `https://localhost:5001/swagger`.

### Front-end
1. Na raiz do projeto, acesse a pasta do Front-end:
   ```bash
   cd TaskFlow/FrontEnd
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
4. Abra no navegador: `http://localhost:4200/`.

## Estrutura de Pastas
```
TaskFlow/
├── BackEnd/       # API .NET 8
│   ├── Controllers/
│   ├── Migrations/
│   └── appsettings.Development.json
└── FrontEnd/      # App Angular
    └── src/
        └── app/
```

## Autores e Colaboradores
- **Pedro de Miranda** – Autor principal.
- **Tiago Grigull**, **Gabriel Heron**, **Éder Gabriel Rigueira Campos** – Colaboradores.

---

*Última atualização: 28 de Abril de 2025*

