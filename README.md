# Documentação do Backend - Desafio Leonardo Fernandez

## Visão Geral

Este documento descreve o backend do projeto "Desafio" e fornece informações sobre a estrutura do banco de dados, as regras de negócio, as rotas da API e outras informações relevantes para o desenvolvimento e uso do sistema.

## Branch Atual

- Nome da Branch: `desafio-leonardo-fernandez`

## Banco de Dados

### Criação do Banco de Dados

```sql
CREATE DATABASE Desafio;

```
## Tabelas do Banco de Dados
### Tabela Bimestre

```
sql

CREATE TABLE Bimestre (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

```
### Tabela Disciplina

```
sql

CREATE TABLE Disciplina (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL
);

```
### Tabela Resultado

```
sql

CREATE TABLE Resultado (
  id SERIAL PRIMARY KEY,
  bimestre_id INT REFERENCES Bimestre(id),
  disciplina_id INT REFERENCES Disciplina(id),
  nota FLOAT,
  criadoEm TIMESTAMP,
  atualizadoEm TIMESTAMP
);

```
### Regras

    Nota: Deve estar no intervalo de >=0 e <=10.
    Apenas uma disciplina por bimestre é permitida.

## API

A API oferece as seguintes funcionalidades:
### Listagem

    Método: GET
    Rota: https://localhost:3333/grades

### Criação

    Método: POST
    Rota: https://localhost:3333/grade
    Exemplo de Corpo da Requisição:

```
json

{
  "bimestre_id": 4,
  "disciplina_id": 1,
  "nota": 6.7
}

```
### Remoção

    Método: DELETE
    Rota: http://localhost:3333/grade/:id

## Figma (Apoio / Entendimento das funcionalidades)

  [Link para o Figma](https://www.figma.com/file/YnZJ3bXle54cM6eQWnJZPH/Desafio-(Copy)?type=design&node-id=3%3A493&mode=dev)

  Todas as rotas são públicas e não necessitam de autenticação para acessar.

Este documento fornece uma visão geral das funcionalidades e da estrutura do projeto. Certifique-se de atualizá-lo conforme o projeto evolui e novas funcionalidades são adicionadas. É fundamental que toda a equipe tenha acesso a essa documentação para garantir a compreensão e o desenvolvimento eficaz do projeto.

